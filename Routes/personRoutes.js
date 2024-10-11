const express = require('express');
const router = express.Router();

const person = require('./../Models/person');

router.post('/', async (req, res) => {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log('data saved')
    res.status(200).json(response);
});

router.get('/', async (req, res) => {
    try {
        const data = await person.find();

        console.log('Data is fetch')
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/:work', async (req, res) => {
    try {
        const workType = req.params.work;
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await person.find({ work: workType });
            console.log('Response fetched');
            res.status(200).json(response);
        }
        else {
            console.log(err);
            res.status(500).json({ error: 'Invalid Work type' })
        }
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }

})

// update data

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;  // Extract the id from URL
        const updatedData = req.body;    // Updated data for the person

        const response = await person.findByIdAndUpdate(personId, updatedData, {
            new: true,    // Return the updated document
            runValidators: true     // Run  mongoose Validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found ' });
        }
        console.log('data Updated')
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if (!response) {
            console.log("Response not Found");
            res.status(404).json({ message: 'Person data not found' });
        }
        console.log('Data is deleted');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;