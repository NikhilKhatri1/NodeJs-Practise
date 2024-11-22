const User = require('../models/userModel.js')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// register controller
const registerUser = async (req, res) => {
    try {
        //extract user information from our request body
        const { userName, email, password, role } = req.body;

        //check if the user is exist already in our database
        const checkExistingUser = await User.findOne({ $or: [{ userName }, { email }] })

        if (checkExistingUser) {
            return res.status(400).json({ success: false, message: 'User is already exists' })
        }

        //Hashed user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create a new User and save in your database

        const newlyCreatedUser = new User({
            userName,
            email,
            password: hashedPassword,
            role: role || 'user'
        })

        await newlyCreatedUser.save()

        if (newlyCreatedUser) {
            res.status(201).json({ success: true, message: 'User registered successfully!' })
        } else {
            res.status(400).json({ success: false, message: 'Unable to register user please try again.' })
        }

    } catch (error) {
        console.log("Error in Registering user ", error)
        res.status(500).json({ success: false, message: 'Something went wrong' })
    }
}

// login controller
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // wrong email
        if (!user) {
            return res.status(400).json({ success: false, message: `Email does'nt exists` });
        }
        // check password

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Credential' });
        }

        // create user Token
        const token = jwt.sign({
            userId: user._id,
            userName: user.userName,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: '15m'
        })
        res.status(200).json({ success: true, message: 'Logged in successfully', token })

    } catch (error) {
        console.log("Error in login user ", error)
        res.status(500).json({ success: false, message: 'Something went wrong' })
    }
}


module.exports = {
    registerUser,
    loginUser
}