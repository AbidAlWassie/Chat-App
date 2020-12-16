const path = require("path");
const express = require("express");

const app = express();

// Set static directory
app.use(express.static(path.join(__dirname, "public")));

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));