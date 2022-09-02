import React from "react";
import clsx from "clsx";
import classNames from "classnames";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import btnStyles from "src/app/components/button/Button.module.scss";
import {NavLink} from "react-router-dom";
import {QUIZ_PATH} from "src/app/App";

// Main page
const MainPage: React.FC = () => {
  const mainClassName = clsx(styles.main);
  const btnClassName = clsx(btnStyles.btn);
  const btnStartClassName = clsx(btnStyles.btnStart);

  return (
    <main className={mainClassName}>
      <NavLink className={classNames(btnClassName, btnStartClassName)} to={QUIZ_PATH}>Start</NavLink>
    </main>
  );
};

export default MainPage;
