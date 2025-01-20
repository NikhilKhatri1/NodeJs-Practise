

function myGreetPromise(role, name) {
    return new Promise((res, rej) => {
        if (role === 'admin') {
            res(`Welcome ${role} ${name}`)
        }
        else {
            rej(`Welcome ${role} ${name}`)
        }
    })
}

async function Greeting() {
    try {
        const greet = await myGreetPromise('guest', 'john');
        console.log(greet)
    } catch (error) {
        console.log(error)
    }
}


Greeting();