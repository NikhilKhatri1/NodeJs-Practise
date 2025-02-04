

const requestLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    const url = req.url;
    const method = req.method;
    const userAgent = req.userAgent;
    console.log(`Time-[${timeStamp}] Url-[${url}] Method-[${method}] userAgent-[${userAgent}]`);

    next();
}

const addTimeStamp = (req, res, next) => {
    // new propety in previous time Stamp
    req.timeStamp = new Date().toISOString();
    next();
}

module.exports = {
    requestLogger,
    addTimeStamp
};
