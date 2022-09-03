import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "src/app/logic/menu/Menu";
import MainPage from "src/app/logic/mainPage/MainPage";
import SettingsPage from "src/app/logic/settingsPage/SettingsPage";
import QuizPage from "src/app/logic/quizPage/QuizPage";
import ErrorPage from "src/app/logic/errorPage/ErrorPage";

export const SETTINGS_PATH = "settings";
export const QUIZ_PATH = "quiz";

/**
 * The main component with routes
 */
const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={SETTINGS_PATH} element={<SettingsPage />} />
        <Route path={QUIZ_PATH} element={<QuizPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
