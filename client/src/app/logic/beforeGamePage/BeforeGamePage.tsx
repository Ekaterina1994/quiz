import React from "react";
import {Link} from "src/app/component/link/Link";
import {StartGameScreen} from "src/app/component/game/StartGameScreen";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {GAME_PAGE_PATH} from "src/app/logic/gamePage/GamePage";
import clsx from "clsx";
import styles from "src/app/logic/beforeGamePage/BeforeGamePage.module.scss";

/**
 * Path to before Game page
 */
export const BEFORE_GAME_PAGE_PATH = "/start-game";

/**
 * Before Game page component
 */
export const BeforeGamePage: React.FC = () => {
  const CONTAINER_STYLES = clsx(styles.container);

  return (
    <div>
      <Link text="To main" to={MAIN_PAGE_PATH} />
      <div className={CONTAINER_STYLES}>
        <StartGameScreen />
        <Link text="Start" to={GAME_PAGE_PATH} />
      </div>
    </div>
  );
};
