import React from "react";
import Questions from "src/app/component/questions/Questions";
import clsx from "clsx";
import styles from "src/app/logic/quizPage/QuizPage.module.scss";

export const QUIZ_PATH = "quiz"; // Path to QuizPage

const Quiz: React.FC = () => {
  const questionClassName = clsx(styles.container);

  return (
    <section className={questionClassName}>
      <Questions />
    </section>
  );
};

export default Quiz;
