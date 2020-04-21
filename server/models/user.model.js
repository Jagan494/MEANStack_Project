const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required  : true,
        unique : true,
        match : [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    createdAt : {
        type: Date,
        default : Date.now
    },
    hashedPassword:{
        type: String,
        required: true,

    },
    roles: [{
        type : String
    }],
    versionKey : false
});

module.exports = mongoose.model('User', userSchema);

