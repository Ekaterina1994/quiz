import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import btnStyles from "src/app/component/button/Button.module.scss";
import {NavLink} from "react-router-dom";
import {QUIZ_PATH, SETTINGS_PATH} from "src/app/App";

/**
 * Main page
 */
const MainPage: React.FC = () => {
  const mainClassName = clsx(styles.main);
  const btnStartClassName = clsx(btnStyles.btnStart, btnStyles.btn);

  return (
    <main className={mainClassName}>
      <NavLink className={btnStartClassName} to={QUIZ_PATH}>Start</NavLink>
      <NavLink className={btnStartClassName} to={SETTINGS_PATH}>Settings</NavLink>
    </main>
  );
};

export default MainPage;
