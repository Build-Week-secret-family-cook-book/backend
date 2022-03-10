const db = require('../../data/db-config')

const checkUser = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "username and password is required" })
    } else {
        next();
    }
};

const checkByUserId = async (req, res, next) => {
    const userId = await db('users')
        .where('user_id', req.params.user_id)
        .first();
    if (userId) {
        next();
    } else {
        next({ status: 404, message: 'User not found.' })
    }
}

const checkByUsername = async (req, res, next) => {
    const username = req.body.username
    try {
        const user = await db('users').where("username", username).first();
        if (user) {
            req.username = user;
            next();
        } else {
            next({ status: 404, message: "not found" })
        }
    } catch (err) {
        next(err)
    }
};

module.exports = {
    checkUser,
    checkByUserId,
    checkByUsername
}