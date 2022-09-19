import {QuizRoundModel} from "src/app/model/QuizRoundModel";

export interface QuizServiceMethods {
  getQuestions(): Promise<QuizRoundModel[]>
}