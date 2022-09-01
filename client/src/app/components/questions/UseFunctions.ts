import React, {useState, useEffect} from "react";
import {Quiz} from "src/app/logic/model/Quiz";
import {quizService} from "src/app/services/ServiceInitialization";

const useFunc: () => void = () => {

  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  const [data, setData] = useState<Quiz[]>([]);
  const loadData: () => void = async () => {
    const newData: Quiz[] = await quizService.getData();
    setData(newData);
  };
  useEffect(() => {
    loadData();
  }, []);

  // Function for set Score to 0
  const restart: () => void = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };

  // Function for to send answer. If its right answer - number of points grow
  const submit: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    event.preventDefault();

    const isRightAnswer: boolean = answer === data[questionIndex]?.rightAnswer;
    if (isRightAnswer) {
      setScore(score + 1);
    }

    const isMoreQuestionsAvailable: boolean = questionIndex < data.length;
    if (isMoreQuestionsAvailable) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return [onChange, submit, restart];

};

export default useFunc;