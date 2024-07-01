const db = require('../db');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs');
const connection = require('../db');

//register a new user
exports.register = async ( req, res ) => {
    try{
      const {username, email, password} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = 'INSERT INTO users (username, email, password) VALUES (?,?,?)';
      const values = [username, email, hashedPassword];
      connection.query(sql, values, (error, results)=> {
        if (error) {
            return res.status(500).json({error: error.message})
        }
        console.log( results.insertId );
        const token = jwt.sign({id: results.insertId}, config.jwtSecret, {expiresIn: '1h'})
        res.status(201).json({token})
      })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}