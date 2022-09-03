import {useState, useEffect} from "react";
import {QuizRound} from "src/app/model/QuizRoundModel";
import {quizService} from "src/app/services/ServiceInitialization";

/**
 * Custom hook function
 * @returns data
 */
const useGetQuestions = (): [QuizRound[]] => {

  const [question, setQuestion] = useState<QuizRound[]>([]);

  // Function get data and give it to us
  const loadQuestion: () => void = async () => {
    const newData: QuizRound[] = await quizService.getQuestions();
    setQuestion(newData);
  };
  useEffect(() => {
    loadQuestion();
  }, []);

  return [question];

};

export default useGetQuestions;