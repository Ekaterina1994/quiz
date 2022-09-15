import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/quizPage/QuizPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {Questions} from "src/app/component/questions/Questions";
import {MAIN_PATH} from "src/app/logic/mainPage/MainPage";

export const QUIZ_PATH = "quiz"; // Path to QuizPage

export const QuizPage: React.FC = () => {
  const questionClassName = clsx(styles.container);

  return (
    <>
      <Link name="To menu" to={MAIN_PATH} />
      <section className={questionClassName}>
        <Questions />
      </section>
    </>
  );
};
