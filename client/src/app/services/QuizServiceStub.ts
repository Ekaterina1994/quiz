import {QuizRound} from "src/app/model/QuizRound";
import questionsDTO from "src/app/data.json";
import {questionsRoundDTO} from "./IQuestionsDTO";

// Class which describe path for get data
export class QuizServiceStub {

  public pathToData: {pathToData: string};

  constructor(serviceConfig: {pathToData: string}) {
    this.pathToData = serviceConfig;
  }

  // Method which return data
  public async getData(): Promise<QuizRound[]> {
    const question = questionsDTO.map((questionsElement: questionsRoundDTO) => {return new QuizRound(questionsElement);});

    return question;
  }

}
