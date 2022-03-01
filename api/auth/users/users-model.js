const db = require('../../data/db-config')

const getAllUsers = () => {
    return db('users');
}

const insertUser = async user => {
    const [newUser] = await db('users').insert(user, ['user_id', 'username', 'password']);
    return newUser
}

module.exports = {
    getAllUsers,
    insertUser
}