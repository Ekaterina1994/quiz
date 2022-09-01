import { Quiz } from "src/app/logic/model/Quiz";
import data from "../store/data.json";

// Class which describe path for get data
export class QuizService {

  public pathToBack: string;

  constructor(config: any) {
    this.pathToBack = config.data;
  }

  // Method which return data
  public async getDataExample(): Promise<Quiz[]> {
    // fetch data or something else
    return data;
  }

}