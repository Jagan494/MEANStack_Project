const express = require('express');
const asyncHandler = require('express-async-handler');
const userController = require('../controller/user.controller');
const router = express.Router();

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert));
router.post('/login', asyncHandler(getUserByEmailAndPassword));

async function insert(req, res, next){
    const user = req.body;
    console.log('Registering user', user);
    const savedUser = await userController.insert(user);
    console.log(savedUser);
    res.json(savedUser);
}

async function getUserByEmailAndPassword(req, res, next){
    const user = req.body;
    console.log('logging user, tracking from server', user);
    const savedUser = await userController.getUserByEmailAndPassword(user.email, user.password);
    console.log('logged in to ProductMart', savedUser);
    res.json(savedUser);
}


module.exports = router