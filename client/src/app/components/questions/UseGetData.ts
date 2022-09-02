import {useState, useEffect} from "react";
import {QuizRound} from "src/app/model/QuizRound";
import {quizService} from "src/app/services/ServiceInitialization";

const useGetData = (): [QuizRound[]] => {

  const [data, setData] = useState<QuizRound[]>([]);

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