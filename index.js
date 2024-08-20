const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const dname = path.join(__dirname, "Views");
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("Views", dname);

app.use(express.static(dname));

app.get("/", (req, res) => {
  res.render("index.ejs");
  //   res.end("Hi I Am Index.js");
});

app.listen(PORT, () => {
  console.log(`Server Running On http://localhost:${PORT}`);
});
