const User = require('../models/userModel.js')

const addUserData = async (req, res) => {
    try {
        const newUser = req.body;
        const addedData = await User.create(newUser);
        if (addedData) {
            res.status(200).json({ success: true, message: "User is Added", data: addedData })
            console.log(addedData)
        } else {
            res.json({ success: false, message: "data not created" })
            console.log("data not created");
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something Went Wrong' })
        console.log("Error in adding User", error)
    }
}
const getAllUserData = async (req, res) => {
    try {
        const getAllUser = await User.find({});
        if (getAllUser) {
            res.status(200).json({ success: true, message: "List of Data", data: getAllUser })
            console.log(getAllUser)
        } else {
            res.status(404).json({ success: false, message: "data not found" });
            console.log("User not found")
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something Went Wrong' })
        console.log("Error in adding User", error)
    }
}

const getUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const getUser = await User.findById(userId);
        if (getUser) {
            res.status(200).json({ success: true, message: "List of Data", data: getUser })
            console.log(getUser)
        } else {
            res.status(404).json({ success: false, message: "data not found" });
            console.log("User not found")
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something Went Wrong' })
        console.log("Error in adding User", error)
    }
}

const updateUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateUser = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, updateUser, { new: true });
        if (updatedUser) {
            res.status(200).json({ success: false, message: 'User Data Updated successfully', data: updatedUser })
            console.log(updatedUser)
        } else {
            res.status(404).json({ success: false, message: 'User id not found' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something Went Wrong' })
        console.log("Error in adding User", error)
    }

}

const deleteUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (deletedUser) {
            res.status(200).json({ success: false, message: 'User Data deleted successfully', data: deletedUser })
            console.log("User Data deleted...")
            console.log(deletedUser)
        } else {
            res.status(404).json({ success: false, message: 'User id not found' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something Went Wrong' })
        console.log("Error in adding User", error)
    }

}


module.exports = {
    addUserData,
    getAllUserData,
    getUserData,
    updateUserData,
    deleteUserData
}
