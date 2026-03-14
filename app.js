import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("we");
  res.send("<h1>Backend</h1>");
});

export default app;
