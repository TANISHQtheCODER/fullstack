const fs = require('fs')
const zlib = require('zlib')

const setFile = fs.createReadStream("demo.txt")
const getFile = fs.createWriteStream("demo.txt.gz")

setFile
    .pipe(zlib.createGzip())
    .pipe(getFile)
    .on("finish" , () =>
        {
            console.log("done");
        } 
        );
