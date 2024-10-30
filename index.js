import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("chijioke");
});

app.listen(4000);
console.log("server on port", 4000);
