import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {fetchRequest} from "src/app/service/FetchUtils";
import {questionsRoundDTO} from "src/app/model/QuestionsRoundDTO";
import {QuizServiceMethods} from "src/app/service/QuizServiceMethods";

/**
 * Use when the client have internet. We get a response with all data for quiz
 */
export class QuizService implements QuizServiceMethods {

  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Return array with questions, answers, right answers, keys
   */
  public async getQuestions(): Promise<QuizRoundModel[]> {

    /**
     * Path to database in the Internet
     */
    const url = this.baseUrl;

    /**
     * Get response from request to get data from internet
     */
    const {content: questionsDTO}: {content: QuizRoundModel[]} = await fetchRequest.get(url);

    /**
     * New array with questions for all quiz
     */
    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRoundModel(questionsElement);
    });

    return questions;
  }

}
