const fs = require("fs");

fs.writeFile("sample.txt", "Hello Node.js!", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File created successfully.");

    fs.appendFile("sample.txt", "\nWelcome to FS Module.", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Data appended successfully.");

        fs.readFile("sample.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("\nFile Content:");
            console.log(data);

            fs.rename("sample.txt", "newSample.txt", (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("\nFile renamed successfully.");

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
