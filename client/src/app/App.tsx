import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import MainPage from "src/app/logic/mainPage/MainPage";
import SettingsPage from "src/app/logic/settingsPage/SettingsPage";
import ErrorPage from "src/app/logic/errorPage/ErrorPage";
import Quiz from "src/app/logic/Quiz";

const SETTINGS_PATH = "settings";
const ERROR_PATH = "404";

// The main component with routes
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Quiz />} />
          <Route path={SETTINGS_PATH} element={<SettingsPage />} />
          <Route path={ERROR_PATH} element={<ErrorPage />} />
          <Route path="*" element={(<Navigate to={`/${ERROR_PATH}`} />)} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
