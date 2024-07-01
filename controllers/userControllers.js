const db = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs')

exports.register = async ( req, res ) => {
    try{
        const user = await db.user.create(req.body);
        const token = jwt.sign({ id: user.id }, config.jwtSecret, {expiresIn: '1h'});
        res.status(201).json({token});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}