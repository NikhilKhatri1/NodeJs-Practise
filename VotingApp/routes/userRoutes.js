const express = require("express");
const router = express.Router();

const User = require("../models/user")

const { jwtAuthMiddleware, generateToken } = require("./../jwt");

router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();
        console.log("data saved");

        const payload = {
            id: response.id
        }
        console.log(JSON.stringify(payload));

        const token = generateToken(payload);

        console.log("Token is : ", token);

        res.status(200).json({ response: response, Token: token });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Interal Server Error" })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { adhaarCardNumber, password } = req.body;

        const user = await User.findOne({ adhaarCardNumber: adhaarCardNumber });

        if (!user || !(await user.comparePassword(password))) {
            console.log("invalid Adhaar Number or invalid Password");
            res.status(401).json({ message: "invalid Adhaar Number or invalid Password" });
        }

        const payload = {
            id: user.id
        }

        const token = generateToken(payload)

        res.json({ token });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post("/profile", jwtAuthMiddleware, async (req, res) => {
    try {
        const userData = req.user;
        const userId = userData.id;
        const user = await User.findbyId(userId);
        res.status(200).json({ user });

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})