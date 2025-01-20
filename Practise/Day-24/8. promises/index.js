// promise

function delayFn(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

console.log('Promise Lecture Starts');

delayFn(2000)
    .then(() => {
        console.log('After 2 second promise resolved')
    })
    .catch((err) => {
        console.log(err)
    })

console.log('End');