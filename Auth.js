//import passport
const passport = require('passport');

//import person schema
const person = require('./Models/person');

const localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy(async (username, password, done) => {
    // authenticationlogic here
    try {

        /* console.log(("Recieved Credential", USERNAME, password)); */
        const user = await person.findOne({ userName: username });
        if (!user) {
            // done is callback function that is provided by 
            // Passport to signal the completion of an authentication attempt.
            return done(null, false, { message: 'Incorrect user name.' })
        }
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user)
        } else {
            return done(null, false, { message: "Invalid user Password" })
        }
    }
    catch (err) {
        return done(err);
    }

}))

module.exports = passport;