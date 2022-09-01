import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./logic/home/MainPage";
import Layout from "./logic/layout/Layout";
import SettingsPage from "./logic/settings/SettingsPage";
import NotFoundPage from "./logic/error/NotFoundPage";

const SETTINGS_PATH = "settings";
const ERROR_PATH = "404";

// The main component with routes
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={SETTINGS_PATH} element={<SettingsPage />} />
          <Route path={ERROR_PATH} element={<NotFoundPage />} />
          <Route path="*" element={(<Navigate to={`/${ERROR_PATH}`} />)} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
