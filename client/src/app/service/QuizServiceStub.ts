import {QuizRound} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/questionsRoundDTO.json";
import {questionsRoundDTO} from "src/app/model/QuestionsDTO";

/**
 * Use when the client doesn't have internet
 */
export class QuizServiceStub {

  /**
	 * Return array with questions, answers, right answers, keys
	 */
  public async getQuestions(): Promise<QuizRound[]> {

    /**
		 * New array with questions for all quiz
		 */
    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRound(questionsElement);
    });

    return questions;
  }

}
