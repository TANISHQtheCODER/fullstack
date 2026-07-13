const express = require("express");

const app = express();

const PORT = 3000;

// Route to fetch Google page
app.get("/google", async (req, res) => {

    try {

        const response = await fetch("https://www.google.com");

        const data = await response.text();

        res.send(data);

    } catch (error) {

        res.send("Error: " + error.message);

    }

});

// Start server
app.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}`);

});