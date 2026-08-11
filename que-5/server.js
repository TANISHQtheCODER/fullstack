const fs = require('fs')
const zlib = require('zlib')

const setFile = fs.createReadStream("demo.txt.gz")
const getFile = fs.createWriteStream("demo.txt")

setFile
    .pipe(zlib.createGunzip())
    .pipe(getFile)
    .on("finish" , () =>
        {
            console.log("done");
        } 
        );