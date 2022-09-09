import {QuizRoundModel} from "src/app/model/QuizRoundModel";

import {fetchRequest} from "src/app/service/FetchUtils";
import {questionsRoundDTO} from "src/app/model/QuestionsRoundDTO";

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
  public async getQuestions(): Promise<QuizRoundModel[]> {
    const url = this.baseUrl;
    const {content: questionsDTO}: {content: QuizRoundModel[]} = await fetchRequest.get(url);

    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRoundModel(questionsElement);
    });

    return questions;
  }

}
