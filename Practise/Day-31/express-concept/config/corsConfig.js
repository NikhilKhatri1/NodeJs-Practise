const cors = require('cors');

const configureCors = () => {
    return cors({
        // origin-> specific origin you want to display backend login
        origin: (origin, callback) => {
            const allowedOrigins = [
                'http://localhost:3000',
                "https://www.example.xyz"
            ]
            // origin is in the list or undefined
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);  // giving permission so that can be allowed
            } else {
                callback(new Error('Not allowed by cors'))
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],

        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Accept-Version"
        ],
        // display headers
        exposedHeaders: ['X-Total-Count', 'Content-Range'],
        // allow cookies etc
        credentials: true,
        // check reqeust is safe or not
        preflightContinue: false,
        // chache your preflight responce for 10 ins (600sec)
        // avoid sending options requests multiple times

        maxAge: 600,
        // successfull option request
        optionsSuccessStatus: 204
    })
}

module.exports = configureCors;