const bcrypt = require('bcrypt')
const User = require('../models/user.model');

async function insert(user){
    console.log('Saving the data');
    user.hashedPassword = bcrypt.hashSync(user.password, 10);
    delete user.password;
    return await new User(user).save();
}
async function getUserByEmailAndPassword(email, password){
    let user = await User.findOne({ email });
    console.log(user);
    if(isValidUser(user, password, user.hashedPassword)){
        
        user = user.toObject();
        console.log(user);
        delete user.hashedPassword;
        return user;
    }else {
        return null;
    }
}

function isValidUser(user, password, hashedPassword){
    console.log('validating password and user')
    return user && bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    insert,
    getUserByEmailAndPassword
};