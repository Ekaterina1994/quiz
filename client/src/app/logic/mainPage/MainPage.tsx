import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {SETTINGS_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {QUIZ_PATH} from "src/app/logic/quizPage/QuizPage";

export const MAIN_PATH = "/"; // The first route acts as the root. It's path to MainPage

export const MainPage: React.FC = () => {
  const mainClassName = clsx(styles.main);

  return (
    <main className={mainClassName}>
      <Link name="Start" to={QUIZ_PATH} />
      <Link name="Settings" to={SETTINGS_PATH} />
    </main>
  );
};
