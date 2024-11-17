function divide(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("numerator can't by divided by zero")
        }
        else {
            resolve(num1 / num2)
        }
    })
}

divide(10, 0)
    .then((result) => {
        console.log("Result is ", result)
    })
    .catch((err) => {
        console.log("Error is ", err)
    })