// Global Object: console
console.log("===== Global Objects Example =====");

// Global Object: __filename
console.log("Current File:", __filename);

// Global Object: __dirname
console.log("Current Directory:", __dirname);

// Global Object: process
console.log("Platform:", process.platform);

// Read Command Line Arguments
console.log("\nCommand Line Arguments:");

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

// Global Function: setTimeout
setTimeout(() => {
    console.log("\nProgram executed successfully after 2 seconds.");
}, 100000);