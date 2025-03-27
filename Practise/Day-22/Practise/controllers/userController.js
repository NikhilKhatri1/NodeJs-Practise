const user = require("../schema/userSchema");

// get all user name and email

const getUser = async (req, res) => {
    try {
        const users = await user.find({}, 'name email');
        if (users.length === 0) {
            return res.status(404).json({ success: false, message: "No user found" })
        }
        res.status(200).json({ success: true, message: users });
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ success: true, message: error.message });
    }
}

// add user
const addUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const isBook = await user.findOne({ email });
        if (isBook) {
            console.log("Email is Already linked with other, try Another");
            return res.status(401).json({ success: true, message: "Email is already taken" });
        }
        const newUser = new user({
            name,
            age,
            email
        })
        const saveUser = await newUser.save();
        console.log("user is Saved");
        res.status(200).json({ success: true, message: saveUser });
    } catch (error) {
        console.error(error.message)
        res.status(501).json({ success: false, message: error.message })
    }
}

// update user and update any data

// const updateUser = async (req, res) => {
//     const { email, updatedUser } = req.body;
//     try {
//         const userToUpdate = await user.findOne({ email });

//         if (!userToUpdate) {
//             console.log("User not Found");
//             return res.status(404).json({ success: false, message: "User not found" })
//         }
//         let newUpdatedUser = await user.findOneAndUpdate({ email }, updatedUser, { new: true });

//         console.log("User updated successfully");
//         res.status(200).json({ success: true, message: newUpdatedUser })

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ success: false, message: error.message })
//     }
// }


const updateUser = async (req, res) => {
    const { email, newEmail, name, age } = req.body;

    try {
        // Check if user exists
        const userToUpdate = await user.findOne({ email });

        if (!userToUpdate) {
            console.log("User not Found");
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update the user data
        const updated = await user.findOneAndUpdate(
            { email }, // Find user by email
            {
                email: newEmail,
                name,
                age
            },
            { new: true, runValidators: true } // Return updated document, run validators on update
        );

        if (!updated) {
            console.log("User not updated");
            return res.status(400).json({ success: false, message: "User update failed" });
        }

        console.log("User updated successfully");
        res.status(200).json({ success: true, message: "User updated successfully", data: updated });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}


module.exports = {
    addUser,
    getUser,
    updateUser
}