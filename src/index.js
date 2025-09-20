const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));

console.log(path.join(__dirname, "/resources/views"));
//routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
