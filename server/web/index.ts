import express, {Express,  Request, Response} from "express";
import { config } from "dotenv";
import { readFile } from "../utils/readFile";
// import { handleStatus } from "../utils/callbackFunctions";
// import { listenFunction } from "../utils/callbackFunctions";


config();
const app: Express = express();

const PATH: string = "./roundsDTO.json";
// // let DATA_IN_STRING: string;

// // readFile(PATH_TO_FILE);

// let DATA_IN_STRING: string;

// // Return a string with datas which were converted from json file

// readFile(PATH);
// console.log(readFile(PATH));

// console.log(DATA_IN_STRING);

  export const handleStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      const rawRounds: string = await readFile(PATH);
      const rounds = JSON.parse(rawRounds);
      res.status(200).json(rounds);
    } catch (error) {
      res.status(500).json({error});
    }
  }
  
export const PORT = process.env.PORT || 5000;
// listenFunction(PORT);

  export const listenFunction = (): void => {
    console.log(`Server started on PORT ${PORT}`);
  }


// Method .get compare the path of requests (url) and if it's matches returns data in json format
app.get("/api/quiz", handleStatus); // обработать статус

// App listening for connections on port
app.listen(PORT, listenFunction);





