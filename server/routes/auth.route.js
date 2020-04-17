const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert));

async function insert(req, res, next){
    const user = req.body;
    console.log('Registering user', user);
    const userController = require('../controller/user.controller');
    const savedUser = await userController(user);
    console.log(savedUser);
    res.json(savedUser)

}
module.exports = router