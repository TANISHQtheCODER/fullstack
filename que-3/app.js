const readline = require("readline");
const getResponse = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== College Chatbot =====");

rl.question("Ask your question: ", (question) => {

    const answer = getResponse(question);

    console.log("\nBot:", answer);

    rl.close();

});