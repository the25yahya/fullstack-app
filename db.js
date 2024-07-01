const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fullstack_app'
});

connection.connect((err) => {
    if (err) {
        console.error('ERROR CONNECTING TO THE DATABASE:', err.stack)
    }
    console.log("Connected to the databse")
})

module.exports = connection;