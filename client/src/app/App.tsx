import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainPage, MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {SettingsPage, SETTINGS_PAGE_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {GamePage, GAME_PAGE_PATH} from "src/app/logic/gamePage/GamePage";
import {ErrorPage} from "src/app/logic/errorPage/ErrorPage";

/**
 * The main component in app
 */
export const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path={MAIN_PAGE_PATH} element={<MainPage />} />
        <Route path={SETTINGS_PAGE_PATH} element={<SettingsPage />} />
        <Route path={GAME_PAGE_PATH} element={<GamePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};