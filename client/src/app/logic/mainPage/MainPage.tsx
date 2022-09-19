import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {SETTINGS_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {QUIZ_PATH} from "src/app/logic/quizPage/QuizPage";

export const MAIN_PATH = "/"; // The first route acts as the root. It's path to MainPage
const MAIN_STYLES = clsx(styles.main);

export const MainPage: React.FC = () => {
  return (
    <div className={MAIN_STYLES}>
      <Link title="Start" to={QUIZ_PATH} />
      <Link title="Settings" to={SETTINGS_PATH} />
    </div>
  );
};
