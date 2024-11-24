const express = require("express");
const authMiddleware = require('../middleware/authMiddleware.js')
const router = express.Router();

router.get('/welcome', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to Admin Page" })
});

module.exports = router;