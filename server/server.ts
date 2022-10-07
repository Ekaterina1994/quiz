import express from "express";
import quiz from "../server/quiz.json";

const app = express();

const PORT = 5000;

app.get("/api/quiz", (req, res) =>
{
  res.json(quiz);
});

app.listen(PORT, (req, res) =>
{
  console.log(`Server started on PORT ${PORT}`);
});


