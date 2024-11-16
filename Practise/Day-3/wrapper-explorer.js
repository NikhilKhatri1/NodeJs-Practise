console.log("__filename This is wrapper explorer ", __filename);
console.log("__dirname This is wrapper explorer ", __dirname);

module.exports.greet = function (name) {
    console.log("Hello, ", name);
}