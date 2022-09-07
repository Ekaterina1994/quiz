import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import linkStyles from "src/app/component/button/Button.module.scss";
import {NavLink} from "react-router-dom";
import {SETTINGS_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {QUIZ_PATH} from "src/app/logic/quizPage/QuizPage";

export const MAIN_PATH = "/"; // The first route acts as the root. It's path to MainPage

const MainPage: React.FC = () => {
  const mainClassName = clsx(styles.main);
  const linkClassName = clsx(linkStyles.btn);

  return (
    <main className={mainClassName}>
      <NavLink className={linkClassName} to={QUIZ_PATH}>Start</NavLink>
      <NavLink className={linkClassName} to={SETTINGS_PATH}>Settings</NavLink>
    </main>
  );
};

export default MainPage;
