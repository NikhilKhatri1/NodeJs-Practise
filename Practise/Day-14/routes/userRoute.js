const express = require('express');
const { allUserData, addUser, getUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router()
// routes for user add and get data
router.get('/allUser', allUserData);
router.get('/:id', getUser);
router.post('/addUser', addUser);
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;