const fs = require("fs");
const util = require("util");

const unlinkFile = util.promisify(fs.unlink);

unlinkFile("test.txt")
    .then(() => {
        console.log("File deleted successfully.");
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });
