const fs = require("fs");

// 1. Create a file
fs.writeFile("sample.txt", "Hello Node.js!", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File created successfully.");

    // 2. Append data
    fs.appendFile("sample.txt", "\nWelcome to FS Module.", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Data appended successfully.");

        // 3. Read file
        fs.readFile("sample.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("\nFile Content:");
            console.log(data);

            // 4. Rename file
            fs.rename("sample.txt", "newSample.txt", (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("\nFile renamed successfully.");

                // 5. Delete file
                fs.unlink("newSample.txt", (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log("File deleted successfully.");
                });
            });
        });
    });
});