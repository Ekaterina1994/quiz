import React, {useState} from "react";
import {QuizRoundModel} from "src/app/model/QuizRoundModel";
import {useRoundQuestionAndAnswers} from "src/app/component/questions/useRoundQuestionAndAnswers";
import {getAnswerByQuestionIndex} from "./Helpers";

/**
 *
 * @returns score, questionIndex, answer, data and methods: onChange, submit, restart
 */
export const useQuizMethods = (): [
  number,
  number,
  string,
  QuizRoundModel[],
  {
    checkAnswer: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: (event: React.MouseEvent) => void;
    restart: () => void;
  }] => {

  const [score, setScore] = useState<number>(0);
  const questions = useRoundQuestionAndAnswers();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

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

    const rightAnswer = getAnswerByQuestionIndex(questionIndex, questions);
    const isRightAnswer: boolean = answer === rightAnswer;
    const isMoreQuestionsAvailable: boolean = questionIndex < questions.length;

    if (isRightAnswer) {
      setScore(score + 1);
    }

    if (isMoreQuestionsAvailable) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  // Keeps track of the selected answer
  // const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAnswer(e.target.value);
  // };
  // alias
  type OnChangeHandler<T> = (e: React.ChangeEvent<T>) => void;
  const checkAnswer: OnChangeHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const methods = {checkAnswer, submit, restart};

  return [score, questionIndex, answer, questions, methods];
};
