const router = require('express').Router()
const bcrypt = require('bcrypt')
const { checkUser, checkByUserId, checkByUsername } = require('./users-middleware')
const Users = require('./users-model')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../../config')
const db = require('../../data/db-config')

router.get('/', (req, res, next) => {
    Users.getAllUsers()
        .then(users => {
            res.json(users)
        })
        .catch(next)
})

router.post('/register', checkUser, (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);

    Users.insertUser(user)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})

router.post('/login', (req, res, next) => {
    let { password } = req.body
    // If username or password is not found, return an error.
    if (!username || !password) {
        return res.status(400).json({ message: "username and password required" })
    }

    db("users as u")
        .select("u.username", "u.password")
        .where("u.username", username)
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `welcome, ${user.username}`,
                    token
                })
            } else {
                res.status(401).json({ message: `invalid credentials` })
            }
        })
})

router.get('/:username', checkByUsername, (req, res ,next) => {
    let {username} = req.params;
    Users.findUser({username})
    .then(user => {
        res.json(user)
    })
    .catch(next)
})

router.delete('/:user_id', checkByUserId, (req, res, next) => {
    let { user_id } = req.params;

    Users.deleteUser(user_id)
        .then(() => {
            res.json({ message: 'User deleted!' })
        })
        .catch(next);
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

module.exports = router;