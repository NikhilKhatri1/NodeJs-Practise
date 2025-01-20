// Promise with catch

function Divide(num1, num2) {
    return new Promise((res, rej) => {
        if (num2 === 0) {
            rej('Cannot be Divide by zero')
        }
        else {
            res(num1 / num2);
        }
    })
}

Divide(10, 0)
    .then((result) => {
        console.log('DIvided by ', result);
    })
    .catch((err) => {
        console.log('Error in Promise ', err)
    })

