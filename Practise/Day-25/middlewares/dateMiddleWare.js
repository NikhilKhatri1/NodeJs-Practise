// check date on every time on home page visit


const dateMiddleWare = (req, res, next) => {
    console.log(`Time: ${new Date().toString()} ${req.method} ${req.url}`);
    next();
}

module.exports = {
    dateMiddleWare,
}