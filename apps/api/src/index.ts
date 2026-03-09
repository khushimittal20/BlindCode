import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("BlindCode API running");
});

app.listen(4000, () => {
  console.log("API running on port 4000");
});
