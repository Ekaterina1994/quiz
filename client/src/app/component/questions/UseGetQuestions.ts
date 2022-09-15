import React, {useState} from "react";
import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {useFetch} from "src/app/component/questions/useFetch";

/**
 * Custom hook
 * @returns score, questionIndex, answer, data and methods: onChange, submit, restart
 */
export const useGetQuestions = (): [number, number, string, QuizRoundModel[],
  {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: (event: React.MouseEvent) => void; restart: () => void;
  }] => {

  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [question] = useFetch();

  // Set Score to 0
  const restart: () => void = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };

  // Send answer. If its right answer - number of points grow
  const submit: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    event.preventDefault();
    if (question) {
      const isRightAnswer: boolean = answer === question[questionIndex]?.rightAnswer;
      if (isRightAnswer) {
        setScore(score + 1);
      }

      const isMoreQuestionsAvailable: boolean = questionIndex < question.length;
      if (isMoreQuestionsAvailable) {
        setQuestionIndex(questionIndex + 1);
      }
    }
  };

  // Keeps track of the selected answer
  const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const methods = {onChange, submit, restart};

  return [score, questionIndex, answer, question, methods];
};