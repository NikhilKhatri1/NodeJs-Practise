
// tryCatch error

// Function that returns a promise
function myPromise() {
    return new Promise((resolve, reject) => {
        let success = true; // Change this to false to see rejection

        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed!");
        }
    });
}

// Using async/await with try/catch
async function handlePromise() {
    try {
        const result = await myPromise();
        console.log(result);  // If promise is resolved
    } catch (error) {
        console.log(error);   // If promise is rejected
    }
}

handlePromise();
