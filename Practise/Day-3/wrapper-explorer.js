console.log("__filename This is wrapper explorer ", __filename);
console.log("__dirname This is wrapper explorer ", __dirname);

const greet = (name)=>{
    console.log(`Hello ${name}`)
}

module.exports = {
    greet
}