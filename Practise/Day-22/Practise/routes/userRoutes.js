const express = require("express");
const { addUser, getUser, updateUser } = require("../controllers/userController");

const userRouter = express.Router();

// get user

userRouter.get("/users", getUser);

// add Router

userRouter.post("/addUser", addUser);

// update user 
userRouter.put("/updateUser", updateUser)





module.exports = {
    userRouter
}