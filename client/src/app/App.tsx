import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainPage, MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {SettingsPage, SETTINGS_PAGE_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {GamePage, GAME_PAGE_PATH} from "src/app/logic/gamePage/GamePage";
import {BeforeGamePage, BEFORE_GAME_PAGE_PATH} from "src/app/logic/beforeGamePage/BeforeGamePage";
import {ErrorPage} from "src/app/logic/errorPage/ErrorPage";
import {AfterGamePage, AFTER_GAME_PAGE_PATH} from "./logic/afterGamePage/AfterGamePage";

/**
 * The main component in app
 */
export const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path={MAIN_PAGE_PATH} element={<MainPage />} />
        <Route path={SETTINGS_PAGE_PATH} element={<SettingsPage />} />
        <Route path={BEFORE_GAME_PAGE_PATH} element={<BeforeGamePage />} />
        <Route path={GAME_PAGE_PATH} element={<GamePage />} />
        <Route path={AFTER_GAME_PAGE_PATH} element={<AfterGamePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};