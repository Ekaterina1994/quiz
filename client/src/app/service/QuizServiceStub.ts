import {QuizRound} from "src/app/model/QuizRoundModel";
import questionsDTO from "src/app/questionsRoundDTO.json";
// import {fetchRequest} from "./fetchUtils";
import {questionsRoundDTO} from "./IQuestionsDTO";

/**
 * Class which use when the client doesn't have internet
 */
export class QuizServiceStub {

  private pathToData: string;

  constructor() {
    this.pathToData = `${"src/app/questionsRoundDTO.json"}`;
  }

  /**
	 * Method which return data
	 */
  public async getQuestions(): Promise<QuizRound[]> {
    const path = this.pathToData;
    // const {content: questionsDTO}: {content: QuizRound[]} = await fetchRequest.get(path);

    const questions = questionsDTO.map((questionsElement: questionsRoundDTO) => {
      return new QuizRound(questionsElement);
    }, path);

    return questions;
  }

}
