const db = require('../../data/db-config')

const getAllUsers = () => {
    return db('users');
}

const insertUser = async user => {
    const [newUser] = await db('users').insert(user, ['user_id', 'username', 'password']);
    return newUser
}

const deleteUser = user_id => {
    return db("users").where("user_id", user_id).del()
}

const findUser = user => {
    return db("users").where("username", user.username)
}

module.exports = {
    getAllUsers,
    insertUser,
    deleteUser,
    findUser
}