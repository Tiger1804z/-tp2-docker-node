const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Page HTML
app.use(express.static(path.join(__dirname, "public")));


app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from API 🚀" });
});


app.get("/about", (req, res) => {
  res.send("Page about du TP2");
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});