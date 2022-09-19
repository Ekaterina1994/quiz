import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainPage, MAIN_PATH} from "src/app/logic/mainPage/MainPage";
import {SettingsPage, SETTINGS_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {QuizPage, QUIZ_PATH} from "src/app/logic/quizPage/QuizPage";
import {ErrorPage} from "src/app/logic/errorPage/ErrorPage";

/**
 * The main component with routes
 */
export const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path={MAIN_PATH} element={<MainPage />} />
        <Route path={SETTINGS_PATH} element={<SettingsPage />} />
        <Route path={QUIZ_PATH} element={<QuizPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};