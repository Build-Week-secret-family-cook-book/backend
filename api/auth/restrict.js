const {JWT_SECRET} = require('../../config')
const jwt = require('jsonwebtoken')

module.exports = (req, res ,next) => {
    const token = req.headers.authorization;
    if(!token){
        next({status: 400, message: `token required`});
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err){
            next({status: 401, message: 'token invalid'})
        } else {
            req.decodedJwt = decoded
            next();
        }
    });
};