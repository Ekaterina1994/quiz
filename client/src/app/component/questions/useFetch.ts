import {useState, useEffect} from "react";
import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {quizService} from "src/app/service/ServiceInitialization";

/**
 * Custom hook function
 * @returns data
 */
const useFetch = (): [QuizRoundModel[]] => {

  const [question, setQuestion] = useState<QuizRoundModel[]>([]);

  // Function get data and give it to us
  const loadQuestion: () => void = async () => {
    const newData: QuizRoundModel[] = await quizService.getQuestions();
    setQuestion(newData);
  };
  useEffect(() => {
    loadQuestion();
  }, []);

  return [question];

};

export default useFetch;