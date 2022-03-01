const router = require('express').Router()
const bcrypt = require('bcrypt')
const { checkUser } = require('./users-middleware')
const Users = require('./users-model')

router.get('/', (req, res, next) => {
Users.getAllUsers()
.then(users => {
    res.json(users)
})
.catch(next)
})

router.post('/register', checkUser, (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 5);

    Users.insertUser(user)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(next)
})

router.post('/login')

module.exports = router;