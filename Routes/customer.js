const express = require('express');
const bcrypt = require('bcrypt');
const Customer = require('../Models/Customer');

const router = express.Router();

// Customer login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const customer = await Customer.findOne({ username });
        if (!customer) {
            return res.status(400).json({ message: 'Customer not found' });
        }

        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Customer access granted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
