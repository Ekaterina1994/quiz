import { Request, Response } from "express";
import { readFile } from "./readFile";

let QUIZ: string;

readFile();

export const handleStatus = (req: Request, res: Response): void => {
  try {
    
    res.status(200).json(QUIZ);
  } catch (error) {
    res.status(500).json({error});
  }
}

export const PORT = process.env.PORT || 5000;

export const listenFunction = (): void => {
  console.log(`Server started on PORT ${PORT}`);
}