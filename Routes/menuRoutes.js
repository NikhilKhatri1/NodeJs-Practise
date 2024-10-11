const express = require('express');
const router = express.Router();

const menuItem = require('./../Models/menuItem');


router.get('/', async (req, res) => {
    try {
        const data = await menuItem.find();
        console.log("Data is Fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//menu item Post method

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new menuItem(data);
        const response = await newMenuItem.save();
        console.log("Menu item is Saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
});

// menu type in router

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if (tasteType === 'sour' || tasteType === 'sweet' || tasteType === 'spicy') {
            const response = await menuItem.find({ taste: tasteType });
            console.log("Data is found");
            res.status(200).json(response);
        }
        else {
            console.log("Data not found");
            res.status(404).json({ error: 'Data not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;