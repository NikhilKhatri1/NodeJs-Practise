const UserDetails = require('../models/userModel');

// get all user data
const allUserData = async (req, res) => {
    try {
        // on geting data remove -password -_id -firstName -lastName
        const allUser = await UserDetails.find({}).select('-password -_id -firstName -lastName');
        if (allUser?.length > 0) {
            res.status(200).json({ success: true, message: 'List of users are fetched successfully', data: allUser })
            console.log(allUser)
        }
    } catch (error) {
        console.log('error in user Data : ', error)
        res.status(500).json({ message: 'Somethng Went wrong' })
    }
}

//get only specific data

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const getUserData = await UserDetails.findById(userId).select('-password -_id');
        if (getUserData) {
            res.status(200).json({ success: true, message: 'User Found', data: getUserData })
            console.log(getUserData)
        } else {
            res.status(404).json({ success: false, message: 'User not found' })
            console.log('User not Found')
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'something went wrong' });
    }
}

// add new user into data
const addUser = async (req, res) => {
    try {
        const newUser = req.body;
        const newUserData = await UserDetails.create(newUser);
        if (newUserData) {
            res.status(201).json({ success: true, message: "user detail Added Successfully", data: newUserData })
            console.log(newUserData)
        }
    } catch (error) {
        console.log('error in Adding user Data : ', error)
        res.status(500).json({ message: 'Somethng Went wrong' })
    }
}

// update user data

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateUserData = req.body;
        const updatedUser = await UserDetails.findByIdAndUpdate(userId, updateUserData);

        if (!updatedUser) {
            res.status(404).json({ success: false, message: 'User not found' });
            console.log('User not found')
        }
        res.status(200).json({ success: true, message: 'User data is Updated successfully', data: updatedUser })
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong" })
        console.log(error)
    }
}
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await UserDetails.findByIdAndDelete(userId)
        if (!deletedUser) {
            res.status(404).json({ success: false, message: 'user not found' })
            console.log('user not found');
        }
        res.status(200).json({ success: true, message: 'user deleted successfully', data: deletedUser })
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong" })
        console.log(error)
    }
}

module.exports = {
    allUserData,
    addUser,
    getUser,
    updateUser,
    deleteUser
}