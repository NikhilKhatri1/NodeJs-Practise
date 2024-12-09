const User = require('../model/userModel.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register user
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const isExist = await User.findOne({ $or: [{ username }, { email }] });
        if (isExist) {
            return res.status(401).json({ success: false, message: "User Already Exist" });
            console.log("user already existed");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = await jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "15m" });

        if (newUser) {
            res.status(200).json({ success: true, message: 'Account Created Successfully.', token })
        } else {
            res.status(400).json({ success: false, message: 'Unable to Register User' });
            console.log("Unable to Register User");
        }

    } catch (error) {
        res.status(500).json({ success: false, message: "something went wrong" })
        console.log(error.message);
    }
}


// Login User

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'Wrong email' });
            console.log('wrong email')
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(404).json({ success: false, message: 'Wrong password' });
            console.log('Wrong Password')
        }
        const token = await jwt.sign({ user: user.email }, process.env.JWT_SECRET, { expiresIn: '15m' });

        res.status(200).json({ success: true, message: "User login successfully", Data: user, token })
    } catch (error) {
        res.status(500).json({ success: false, message: "something went wrong" })
        console.log(error.message);
    }
}

// get all user name from register

const getUserName = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users || users.length === 0) {
            console.log('No user found')
            return res.status(404).json({ success: false, message: 'No user found' });
        }
        const userName = [];
        users.forEach((user) => {
            userName.push(user.username);
        })
        return res.status(200).json({ success: true, message: 'List of login user', userName })

    } catch (error) {
        console.log(error.message);
        return res.status(501).json({ success: false, message: "something went wrong" });
    }
}

// update user data
const updateUser = async (req, res) => {
    
}

module.exports = {
    registerUser,
    loginUser,
    getUserName
}