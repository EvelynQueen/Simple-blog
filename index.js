const express = require("express");

const app = express();
const PORT = 3000;

//routes
app.get("/tin-tuc", (req, res) => {
  return res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
