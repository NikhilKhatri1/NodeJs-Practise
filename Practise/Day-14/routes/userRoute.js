const express = require('express');
const { allUserData, addUser, getUser } = require('../controllers/userController');

const router = express.Router()
// routes for user add and get data
router.get('/allUser', allUserData)
router.get('/:id', getUser)
router.post('/addUser', addUser)

module.exports = router;