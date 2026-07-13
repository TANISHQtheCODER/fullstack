const fs = require("fs");
const util = require("util");

// Convert fs.unlink into Promise-based function
const unlinkFile = util.promisify(fs.unlink);

// Delete the file
unlinkFile("test.txt")
    .then(() => {
        console.log("File deleted successfully.");
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });