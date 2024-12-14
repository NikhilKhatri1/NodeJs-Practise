const jwt = require("jsonwebtoken");

require("dotenv").config();

const authMiddleware = async (req, res) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ").slice(1)
}



module.exports = authMiddleware