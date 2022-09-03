import {QuizRound} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/data.json";
import {questionsRoundDTO} from "./IQuestionsDTO";

/**
 * Class which use when the client have internet
 */
export class QuizService {

  public pathToData: string;

  constructor(serviceConfig: string) {
    this.pathToData = serviceConfig;
  }

  /**
	 * Method which return data
	 */
  public async getData(): Promise<QuizRound[]> {
    const path = this.pathToData;
    const question = questionsDTO.map((questionsElement: questionsRoundDTO) => {return new QuizRound(questionsElement);}, path);

    return question;
  }

}
