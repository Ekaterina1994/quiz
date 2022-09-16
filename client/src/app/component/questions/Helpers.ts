import {QuizRoundModel} from "src/app/model/QuizRoundModel";

export const getAnswerByQuestionIndex = (index: number, questionsList: QuizRoundModel[]): string => {
  const question: QuizRoundModel | undefined = questionsList[index];
  if (!question) {
    throw new Error("wrong index in array");
  }
  return question.rightAnswer;
};

export const getChoicesByQuestionIndex = (index: number, questionsList: QuizRoundModel[]): string[] => {
  const question: QuizRoundModel | undefined = questionsList[index];
  if (!question) {
    throw new Error("wrong index in array");
  }
  return question.choices;
};

export const getQuestionByQuestionIndex = (index: number, questionsList: QuizRoundModel[]): string => {
  const question: QuizRoundModel | undefined = questionsList[index];
  if (!question) {
    throw new Error("wrong index in array");
  }
  return question.question;
};