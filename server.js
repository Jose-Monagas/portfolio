const express = require("express");

const app = express();

app.use(express.static("build"));
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8913);
