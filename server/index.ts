import express, {Express, Request, Response} from "express";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

const FILE_NAME: string = "./quiz.json";
let QUIZ: string;

// A string with datas which were converted from json file
fs.readFile(FILE_NAME, "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    QUIZ = JSON.parse(data);
  }
});

const app: Express = express();

const PORT = process.env.PORT;

// Method .get compare the path of requests (url) and if it's matches returns data in json format
app.get("/api/quiz", (req: Request, res: Response): void => {
  try {
    res.status(200).json(QUIZ);
  } catch (error) {
    res.status(500).json({error});
  }
});

// App listening for connections on port
app.listen(PORT, (): void => {
  console.log(`Server started on PORT ${PORT}`);
});


