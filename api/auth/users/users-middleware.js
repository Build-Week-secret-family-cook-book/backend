const db = require('../../data/db-config')

const checkUser = (req, res, next) => {
    const { username, password } = req.body;
    if(!username || !password) {
return res.status(400).json({message: "username and password is required"})
    }
};

module.exports = {
    checkUser
}