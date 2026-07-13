const express = require("express");

const app = express();

const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static("public"));

// GET Route
app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});