import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/gamePage/GamePage.module.scss";
import {Link} from "src/app/component/link/Link";
import {GameScreen} from "src/app/component/game/GameScreen";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";

/**
 * Path to Game page
 */
export const GAME_PAGE_PATH = "/game";

/**
 * Game page component
 */
export const GamePage: React.FC = () => {
  const CONTAINER_STYLES = clsx(styles.container);

  return (
    <div>
      <Link text="To main" to={MAIN_PAGE_PATH} />
      <div className={CONTAINER_STYLES}>
        <GameScreen />
      </div>
    </div>
  );
};
