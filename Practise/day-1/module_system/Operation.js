// Module file

const Add = (a,b)=>{
    return a + b;
}


const Subtract = (a,b)=>{
    return a-b;
}

const Divide =(a,b)=>{
    if(b===0){
        console.log('divider cannot be zero');
    }
    else{
        return a/b;
    }
}


module.exports = {
    Add,
    Subtract,
    Divide
}
