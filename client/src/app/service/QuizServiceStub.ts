import {QuizRound} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/questionsRoundDTO.json";
import {questionsRoundDTO} from "./IQuestionsDTO";

/**
 * Class which use when the client doesn't have internet
 */
export class QuizServiceStub {

  /**
	 * Method which return data
	 */
  public async getQuestions(): Promise<QuizRound[]> {
    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRound(questionsElement);
    });

    return questions;
  }

}
