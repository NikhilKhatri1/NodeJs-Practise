const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./Models/Admin');
const Customer = require('./Models/Customer');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/loginSystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Function to check if an admin exists
async function adminExists(username) {
    const admin = await Admin.findOne({ username });
    return admin !== null;
}

// Admin authentication route (optional)
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Admin logged in successfully' });
});

// Signup route for customers
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newCustomer = new Customer({ username, password: hashedPassword });
        await newCustomer.save();
        res.status(201).json({ message: `Customer created: ${username}` });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
