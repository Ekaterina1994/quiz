import {useState, useEffect} from "react";
import {Quiz} from "src/app/logic/model/Quiz";
import {quizService} from "src/app/services/ServiceInitialization";

const useGetData = (): [Quiz[]] => {

  const [data, setData] = useState<Quiz[]>([]);

  const loadData: () => void = async () => {
    const newData: Quiz[] = await quizService.getData();
    setData(newData);
  };
  useEffect(() => {
    loadData();
  }, []);

  return [data];

};

export default useGetData;