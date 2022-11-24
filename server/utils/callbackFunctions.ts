import { Request, Response } from "express";
import { readFile } from "./readFile";

const PATH_TO_FILE: string = "./quiz.json";
let DATA_IN_STRING: string;

readFile(PATH_TO_FILE);

export const handleStatus = (req: Request, res: Response): void => {
  try {
    
    res.status(200).json(DATA_IN_STRING);
  } catch (error) {
    res.status(500).json({error});
  }
}

// const PORT = process.env.PORT || 5000;

export const listenFunction = (PORT: number): void => {
  console.log(`Server started on PORT ${PORT}`);
}