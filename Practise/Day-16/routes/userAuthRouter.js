const express = require('express');
const { registerUser, loginUser } = require('../controllers/authUser.js')

const router = express.Router();

// all router is related to authorization and authentication
router.post('/register', registerUser);
router.post('/login', loginUser);




module.exports = router