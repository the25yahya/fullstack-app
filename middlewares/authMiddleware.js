const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer', '');
    if (!token) {
        return res.status(401).json({error: 'No Token , auth denied'});
    }
    try{
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        next();
    } catch (error){
        res.status(401).json({error: 'token is not valid'});
    }
};
module.exports = authMiddleware;