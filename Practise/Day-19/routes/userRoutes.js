const express = require("express");
const { registerUser, loginUser, getUserName } = require("../controllers/userController");
const userRouter = express.Router();


// Get method
userRouter.get('/getUser', getUserName);



// Post method
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);


module.exports = userRouter

