const express = require('express');
const winston = require('winston');
const argon2 = require('argon2');

// Initialize Express app
const app = express();
app.use(express.json());

// Winston logging configuration
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ filename: 'app.log' }),
    ],
});

// In-memory "database" for users
let users = {};

// Register route (for user sign-up)
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        logger.warn('Registration attempt without username or password');
        return res.status(400).send('Username and password are required');
    }

    try {
        // Hash the password using Argon2
        const hashedPassword = await argon2.hash(password);

        // Store the hashed password (simulating saving to a database)
        users[username] = { password: hashedPassword };

        logger.info(`User registered: ${username}`);

        return res.status(201).send('User registered successfully');
    } catch (error) {
        logger.error(`Error registering user: ${error.message}`);
        return res.status(500).send('Internal server error');
    }
});

// Login route (for user authentication)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        logger.warn('Login attempt without username or password');
        return res.status(400).send('Username and password are required');
    }

    try {
        // Check if the user exists
        const user = users[username];
        if (!user) {
            logger.warn(`Login failed for non-existent user: ${username}`);
            return res.status(404).send('User not found');
        }

        // Verify the password using Argon2
        const validPassword = await argon2.verify(user.password, password);
        if (validPassword) {
            logger.info(`User logged in: ${username}`);
            return res.status(200).send('Login successful');
        } else {
            logger.warn(`Login failed due to incorrect password for user: ${username}`);
            return res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        logger.error(`Error during login: ${error.message}`);
        return res.status(500).send('Internal server error');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
