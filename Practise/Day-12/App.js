const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://nikkhatri311:nikkhatri311@cluster0.qev8k.mongodb.net/')
    .then(() => console.log('database connected successfully'))
    .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createAt: { type: Date, default: Date.now }
});

//create userModel
const User = mongoose.model('User', userSchema);


async function runQueryExample() {
    try {

        // create new document
        // const newUser = await User.create({
        //     name: "bob",
        //     email: "bob@demo.com",
        //     age: 23,
        //     isActive: false,
        //     tags: ['developer']
        // })

        // const newUser = new User({
        //     name: "Alice",
        //     email: "Alice@demo.com",
        //     age: 20,
        //     isActive: true,
        //     tags: ['developer', 'desgner', 'manager']
        // })

        // await newUser.save();

        // console.log('Created a new User', newUser);

        //get allusers
        // const allUsers = await User.find({})

        // console.log(allUsers)

        // const getUserofActive = await User.find({ isActive: true })
        // console.log(getUserofActive)

        // const getUser = await User.findOne({ name: 'John' });
        // console.log(getUser);

        // const getLastCreatedUserById = await User.findOne(newUser._Id)
        // console.log(getLastCreatedUserById)

        //exclude details like id password while consoling th data  (-_id)
        // const selectedField = await User.find().select('name email -_id')
        // console.log(selectedField);

        // limit the data also skip document (user:Alice)
        const limitedUser = await User.find().limit(5).skip(1);
        console.log(limitedUser);
        //sorting by age (descending Order)
        const SortingUserByAge = await User.find().sort({ age: -1 });
        console.log(SortingUserByAge);

    } catch (error) {
        console.log(error);

    } finally {
        await mongoose.connection.close()
    }
}

runQueryExample()