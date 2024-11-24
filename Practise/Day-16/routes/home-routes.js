const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware.js')


router.get('/home', authMiddleware, (req, res) => {
    
    const { userName, userId, role } = req.userInfo;
    
    res.json({
        message: 'welcome to the home page',
        user: {
            _id: userId,
            userName,
            role
        }
    })
});

module.exports= router