

const rateLimit = require('express-rate-limit');

const createBasicRateLimiter = (maxRequest, time) => {
    return rateLimit({
        max: maxRequest,
        windowMS: time,
        message: 'Too many request, please try again later',
        standardHeaders: true,
        legacyHeader: false,
    })
}


module.exports = createBasicRateLimiter;