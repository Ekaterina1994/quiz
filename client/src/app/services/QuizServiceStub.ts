import {QuizRound} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/data.json";
import {questionsRoundDTO} from "./IQuestionsDTO";

// Class which describe path for get data
export class QuizServiceStub {

  public pathToData: string;

  constructor() {
    this.pathToData = `${"../store/data.json"}`;
  }

  // Method which return data
  public async getData(): Promise<QuizRound[]> {
    const path = this.pathToData;
    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRound(questionsElement);
    }, path);

    return questions;
  }

}
