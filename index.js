const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT | 3000;

app.use(express.static("public"));

app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("contact-me(.html)?", (req, res) => {
  app.sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
