import {useState, useEffect} from "react";
import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {quizService} from "src/app/service/ServiceInitialization";

/**
 *
 * @returns questions
 */
export const useRoundQuestionAndAnswers = (): QuizRoundModel[] => {

  const [question, setQuestion] = useState<QuizRoundModel[]>([]);

  // Get questions and give it to us
  const loadQuestion: () => void = async () => {
    const newData: QuizRoundModel[] = await quizService.getQuestions();
    setQuestion(newData);
  };
  useEffect(() => {
    loadQuestion();
  }, []);

  return question;

};