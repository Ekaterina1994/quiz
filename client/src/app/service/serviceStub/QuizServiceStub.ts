import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/questionsRoundDTO.json";
import {questionsRoundDTO} from "src/app/model/QuestionsRoundDTO";

/**
 * Use when the client doesn't have internet
 */
export class QuizServiceStub {

  /**
   * Return array with questions, answers, right answers, keys
   */
  public async getQuestions(): Promise<QuizRoundModel[]> {

    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRoundModel(questionsElement);
    });

    return questions;
  }

}
