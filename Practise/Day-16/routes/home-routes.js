const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.json({
        message: 'welcome to the home page'
    })
});

module.exports= router