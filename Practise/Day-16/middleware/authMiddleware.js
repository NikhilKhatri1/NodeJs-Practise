const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    // console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. no token provided. please login to continue' })
    }

    //decode this token
    try {
        const extractTokenInfo = jwt.verify(token, process.env.JWT_SECRET)
        console.log(extractTokenInfo);

        req.userInfo = extractTokenInfo;
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}


module.exports = authMiddleware;