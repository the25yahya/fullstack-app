require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        databse: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
    jwtSecret: process.env.JWT_SECRET
}