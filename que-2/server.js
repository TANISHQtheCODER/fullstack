const express = require("express");

const app = express();

const PORT = 3000;

// Serve static resources from the "public" folder
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});