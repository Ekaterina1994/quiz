import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import linkStyles from "src/app/component/button/Button.module.scss";
import {NavLink} from "react-router-dom";
import {QUIZ_PATH, SETTINGS_PATH} from "src/app/App";

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
