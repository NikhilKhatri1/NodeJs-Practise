// async / await -- provides the simplified method of Promise


function delayfn(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log("Message is delay by 2 sec")
        }, time)
    })
}

async function delayName(name) {
    await delayfn(2000)
    console.log("Hello ", name)
}

delayName("Alice");