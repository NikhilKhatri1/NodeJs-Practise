const Users = require("../model/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password, role } = req.body

        const checkUserExist = await Users.findOne({ $or: [{ userName }, { email }] })

        if (checkUserExist) {
            res.status(400).json({ success: false, message: "User Exist with similar userName or email" });
        }

        //hashed Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        //create new user and save data

        const newlyCreatedUser = new Users({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            role: role || 'user'
        })

        const user = await newlyCreatedUser.save()
        const token = await jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" })
        if (newlyCreatedUser) {
            res.status(200).json({ success: true, message: 'User created successfuly', token })
            // console.log('User Created Successfully : ', newlyCreatedUser)
        } else {
            res.status(400).json({ success: false, message: 'Unable to Register User' })
            console.log("Unable to Register User")
        }

    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong' })
        console.log(error)
    }

}

//login user
const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if the user exists
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        // Verify password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        // Check if the role matches
        if (user.role !== role) {
            return res.status(401).json({ success: false, message: 'Incorrect role' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        // Send success response with token
        return res.status(200).json({
            success: true,
            token,
        });
    } catch (error) {
        console.error("Error during login:", error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};





module.exports = {
    registerUser,
    loginUser,
}