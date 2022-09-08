import {QuizRound} from "src/app/model/QuizRoundModel";
import {fetchRequest} from "./fetchUtils";
import {questionsRoundDTO} from "./IQuestionsDTO";

/**
 * Class which use when the client have internet
 */
export class QuizService {

  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
	 * Method which return data
	 */
  public async getQuestions(): Promise<QuizRound[]> {
    const url = this.baseUrl;
    const {content: questionsDTO}: {content: QuizRound[]} = await fetchRequest.get(url);

    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRound(questionsElement);
    });

    return questions;
  }

}
