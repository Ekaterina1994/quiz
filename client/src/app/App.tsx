import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainPage, MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {SettingsPage, SETTINGS_PAGE_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {GamePage, GAME_PAGE_PATH} from "src/app/logic/gamePage/GamePage";
import {ErrorPage} from "src/app/logic/errorPage/ErrorPage";
import {AfterGamePage, AFTER_GAME_PAGE_PATH} from "src/app/logic/afterGamePage/AfterGamePage";
import {ScoreContext} from "src/ScoreContext";

const Main = () => {
  const [scores, setScores] = useState<number>(0);
  return (
    <ScoreContext.Provider value={{scores, setScores}}>
      <Router>
        <Routes>
          <Route path={MAIN_PAGE_PATH} element={<MainPage />} />
          <Route path={SETTINGS_PAGE_PATH} element={<SettingsPage />} />
          <Route path={GAME_PAGE_PATH} element={<GamePage />} />
          <Route path={AFTER_GAME_PAGE_PATH} element={<AfterGamePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ScoreContext.Provider>
  );
};

/**
 * The main component in app
 */
export const App: React.FC = () => {

  return (
    <Main />
  );
};