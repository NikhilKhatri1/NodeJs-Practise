const express = require("express");
const { getAllUserData, getUserData, addUserData, updateUserData, deleteUserData } = require("../controllers/userController");


const router = express.Router()


router.get('/getUsers', getAllUserData);
router.get('/getUser/:id', getUserData);
router.post('/addUser', addUserData);
router.put('/updateUser/:id', updateUserData);
router.delete('/deleteUser/:id', deleteUserData);

module.exports = router;