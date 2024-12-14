const express = require("express");
// const jwt = require('jsonwebtoken');
const authMiddleware = require("../middleware/authMiddleware");



const router = express.Router();

router.get('/home', authMiddleware, async (req, res) => {
    // const userName = 
    res.status(200).json({
        message: `Welcome to home`,
        user: {
            userId: user._id,
            userName,
            role
        }
    })
})

module.exports = router;