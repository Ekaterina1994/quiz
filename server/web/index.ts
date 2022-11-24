import express, {Express,  Request, Response} from "express";
import { config } from "dotenv";
import { readFile } from "../utils/readFile";
// import { handleStatus } from "../utils/callbackFunctions";
// import { listenFunction } from "../utils/callbackFunctions";


config();
const app: Express = express();

const PATH: string = "./quiz.json";
// // let DATA_IN_STRING: string;

// // readFile(PATH_TO_FILE);

// let DATA_IN_STRING: string;

// // Return a string with datas which were converted from json file
let DATA_IN_STRING = readFile(PATH);
// console.log(readFile(PATH));
readFile(PATH);
console.log(readFile(PATH));
;

  export const handleStatus = (req: Request, res: Response): void => {
    console.log(123);
    try {
      res.status(200).json(DATA_IN_STRING);
    } catch (error) {
      res.status(500).json({error});
    }
  }
  
  export const PORT = process.env.PORT;
  
// listenFunction(PORT);

  export const listenFunction = (): void => {
    console.log(`Server started on PORT ${PORT}`);
  }


// Method .get compare the path of requests (url) and if it's matches returns data in json format
app.get("/api/quiz", handleStatus);

// App listening for connections on port
app.listen(PORT, listenFunction);





