import React, {useState} from "react";
import {QuizRound} from "src/app/model/QuizRoundModel";
import useGetData from "./UseGetData";

/**
 * Custom hook function
 * @returns score, questionIndex, answer, data and methods: onChange, submit, restart
 */
const useHooks = (): [number, number, string, QuizRound[], {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (event: React.MouseEvent) => void; restart: () => void;}] => {

  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [data] = useGetData();

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
    if (data) {
      const isRightAnswer: boolean = answer === data[questionIndex]?.rightAnswer;
      if (isRightAnswer) {
        setScore(score + 1);
      }

      const isMoreQuestionsAvailable: boolean = questionIndex < data.length;
      if (isMoreQuestionsAvailable) {
        setQuestionIndex(questionIndex + 1);
      }
    }
  };

  // Function, keeps track of the selected answer
  const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const methods = {onChange, submit, restart};

  return [score, questionIndex, answer, data, methods];
};

export default useHooks;