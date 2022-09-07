import {QuizRound} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/data.json";
import {questionsRoundDTO} from "src/app/model/QuestionsDTO";

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
  public async getQuestions(): Promise<QuizRound[]> {
    const path = this.pathToData;
    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {return new QuizRound(questionsElement);}, path);

    return questions;
  }

}
