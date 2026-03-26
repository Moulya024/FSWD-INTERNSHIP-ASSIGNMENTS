const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Hello Server 🚀");
});

app.get("/about", (req, res) => {
  res.send("About Page 📄");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page 📧");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
