const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hi from the Server develop server....");
});

console.log("hello ")
app.listen(3000, () => {
  console.log("Server listening on port 3000.....");
});
