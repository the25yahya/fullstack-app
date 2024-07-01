const bcrypt = require('bcryptjs');

module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define('User',{
        username: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
        },
        email:{
            type: DataTypes.STRING,
            allownull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allownull: false,
        }
    })

    //password hashing

User.beforeSave(async (user)=>{
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
});
    return User;
};

