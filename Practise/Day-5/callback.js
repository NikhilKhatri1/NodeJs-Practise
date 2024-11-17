// callback logic

function person(name, callbackfn) {
    console.log(`Hello ${name}`);
    callbackfn()
}

function address() {
    console.log("address")

}


person("Anil", address);