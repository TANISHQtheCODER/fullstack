console.log("===== Global Objects Example =====");

console.log("Current File:", __filename);

console.log("Current Directory:", __dirname);

console.log("Platform:", process.platform);

console.log("\nCommand Line Arguments:");

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

setTimeout(() => {
    console.log("\nProgram executed successfully after 2 seconds.");
}, 10000);
