import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {fetchRequest} from "src/app/service/FetchUtils";
import {questionsRoundDTO} from "src/app/model/QuestionsRoundDTO";

/**
 * Use when the client have internet
 */
export class QuizService {

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
