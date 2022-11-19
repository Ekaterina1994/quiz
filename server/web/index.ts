import express, {Express,  Request, Response} from "express";
import { config } from "dotenv";
// import { handleStatus } from "../utils/callbackFunctions";
// import { PORT, listenFunction } from "../utils/callbackFunctions";


config();

import fs from "fs";

const FILE_PATH: string = "./quiz.json";

let QUIZ: string;

// A string with datas which were converted from json file

  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      QUIZ = JSON.parse(data);
      return QUIZ;
    }
  });

  export const handleStatus = (req: Request, res: Response): void => {
    try {
      
      res.status(200).json(QUIZ);
    } catch (error) {
      res.status(500).json({error});
    }
  }
  
  export const PORT = process.env.PORT;
  
  export const listenFunction = (): void => {
    console.log(`Server started on PORT ${PORT}`);
  }



const app: Express = express();

// Method .get compare the path of requests (url) and if it's matches returns data in json format
app.get("/api/quiz", handleStatus);

// App listening for connections on port
app.listen(PORT, listenFunction);


