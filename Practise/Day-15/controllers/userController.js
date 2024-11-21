const User = require('../models/userModel.js')

const addUser = async (req, res) => {
    try {
        const userData = req.body;
        const addedData = await User.create(userData);
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