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
        console.log( results );
        const token = jwt.sign({id: results.insertId}, config.jwtSecret, {expiresIn: '1h'})
        res.status(201).json({token})
      })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.login = async (req, res) => {
    try{
        const { email , password } = req.body;

        const sql = 'SELECT * FROM USERS WHERE email = ?'
        const values = email

        connection.query(sql, values, async(error, results)=>{
            if (error) {
                return res.status(500).json({ error: error.message})
            }
            if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
                return res.status(401).json({error: "invalid credentials"})
            }
            const token = jwt.sign({id: results[0].id},config.jwtSecret,{expiresIn: '1h'});
            res.status(200).json( { token } )
        });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}