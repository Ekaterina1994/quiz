import React from "react";
import clsx from "clsx";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import MainPage from "src/app/logic/mainPage/MainPage";
import SettingsPage from "src/app/logic/settingsPage/SettingsPage";
import QuizPage from "src/app/logic/quizPage/QuizPage";
import ErrorPage from "src/app/logic/errorPage/ErrorPage";
import linkStyles from "src/app/component/button/Button.module.scss";

export const MAIN_PATH = "/";
export const SETTINGS_PATH = "settings";
export const QUIZ_PATH = "quiz";

/**
 * The main component with routes
 */
const App: React.FC = () => {
  const linkClassName = clsx(linkStyles.btn);

  return (
    <Router>
      <NavLink className={linkClassName} to={MAIN_PATH}>Main</NavLink>
      <Routes>
        <Route path={MAIN_PATH} element={<MainPage />} />
        <Route path={SETTINGS_PATH} element={<SettingsPage />} />
        <Route path={QUIZ_PATH} element={<QuizPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
