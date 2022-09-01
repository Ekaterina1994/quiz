import {Quiz} from "src/app/logic/model/Quiz";
import IQuizService from "src/app/services/IQuizService";
import data from "../store/data.json";

// Class which describe path for get data
export class QuizService implements IQuizService {

  public pathToData: string;

  constructor(pathToData: any) {
    this.pathToData = pathToData;
  }

  // Method which return data
  public async getData(): Promise<Quiz[]> {
    return data as Quiz[];
  }

}
