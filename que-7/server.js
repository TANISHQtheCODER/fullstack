const express = require("express");

const app = express();

const PORT = 3000;

app.get("/google", async (req, res) => {

    try {

        const response = await fetch("https://www.google.com");

        const data = await response.text();

        res.send(data);

    } catch (error) {

        res.send("Error: " + error.message);

    }

});

app.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}`);

});
