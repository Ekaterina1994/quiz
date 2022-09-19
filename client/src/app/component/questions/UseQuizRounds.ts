import {useState, useEffect} from "react";
import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {quizService} from "src/app/service/ServiceInitialization";

/**
 *
 * @returns  score, questionIndex, answer, questions
 */
export const useQuizRounds = (): QuizRoundModel[] => {

  const [quizRounds, setQuizRounds] = useState<QuizRoundModel[]>([]);

  // Get questions and give it to us
  const loadQuestion: () => void = async () => {
    const insertQuizData: QuizRoundModel[] = await quizService.getQuestions();
    setQuizRounds(insertQuizData);
  };
  useEffect(() => {
    loadQuestion();
  }, []);

  return quizRounds;

};