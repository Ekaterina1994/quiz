import {useState, useEffect} from "react";
import {QuizRound} from "src/app/model/QuizRoundModel";
import {quizService} from "src/app/services/ServiceInitialization";

/**
 * Custom hook function
 * @returns data
 */
const useGetData = (): [QuizRound[]] => {

  const [data, setData] = useState<QuizRound[]>([]);

  // Function get data and give it to us
  const loadData: () => void = async () => {
    const newData: QuizRound[] = await quizService.getData();
    setData(newData);
  };
  useEffect(() => {
    loadData();
  }, []);

  return [data];

};

export default useGetData;