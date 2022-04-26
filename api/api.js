const express = require("express");
const cors = require("cors");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(4500, () => {
console.log("Server running on port 4500");
});
