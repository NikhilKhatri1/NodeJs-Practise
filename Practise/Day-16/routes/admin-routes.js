const express = require("express");
const authMiddleware = require('../middleware/authMiddleware.js')
const adminMiddleware = require('../middleware/adminMiddleware.js')
const router = express.Router();

router.get('/welcome', authMiddleware, adminMiddleware, (req, res) => {
    
    res.json({ message: "Welcome to Admin Page" })

});

module.exports = router;