import React, {useContext} from "react";
import {Link} from "src/app/component/link/Link";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {EndGameScreen} from "src/app/component/game/EndGameScreen";
import {ScoreContext} from "src/app/component/game/ScoreContext";

/**
 * Path to after Game page
 */
export const AFTER_GAME_PAGE_PATH = "/game-end";

/**
 * After Game page component
 */
export const AfterGamePage: React.FC = () => {
  const scores = useContext(ScoreContext);

  return (
    <div>
      <Link text="To main" to={MAIN_PAGE_PATH} />
      <div>
        <EndGameScreen score={scores} />
      </div>
    </div>
  );
};
