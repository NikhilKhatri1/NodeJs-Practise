const Users = require("../model/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// register user
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password, role } = req.body;

        // Check for missing required fields and return error messages
        const missingFields = [];

        if (!firstName) missingFields.push('firstName');
        if (!lastName) missingFields.push('lastName');
        if (!userName) missingFields.push('userName');
        if (!email) missingFields.push('email');
        if (!password) missingFields.push('password');

        // If any fields are missing, return an error with the list of missing fields
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // Check if the user already exists with the same username or email
        const checkUserExist = await Users.findOne({ $or: [{ userName }, { email }] });
        if (checkUserExist) {
            return res.status(400).json({ success: false, message: "User exists with similar userName or email" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user and save data
        const newlyCreatedUser = new Users({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            role: role || 'user'
        });

        const user = await newlyCreatedUser.save();

        // Generate a JWT token
        const token = await jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        // Return success response with the token
        return res.status(200).json({ success: true, message: 'User created successfully', token });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
};


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