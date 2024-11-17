const fs = require("fs");

const data = "Hello this input file"

fs.writeFile("input.txt", data, (err) => {
    if (err) {
        console.log("Error in creating file ", err)
    }
    console.log("File is Created...")
    fs.readFile("input.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error Reading File: ", err)
            return
        }
        console.log(data)
        const modifiedFileData = data.toUpperCase()

        fs.writeFile("output.txt", modifiedFileData, (err) => {
            if (err) {
                console.log("Error in Updating file")
                return
            }
            console.log("data is Updated...");
            fs.readFile("output.txt", "utf8", (err, data) => {
                if (err) {
                    console.log("Error in reading Data", err)
                    return
                }
                console.log(data)
            })
        })
    })
})