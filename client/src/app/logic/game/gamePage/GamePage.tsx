import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/game/gamePage/GamePage.module.scss";
import {GameInfoScreen} from "src/app/logic/game/gamePage/gameInfoScreen/GameInfoScreen";
import {GameScreen} from "src/app/logic/game/gamePage/gameScreen/GameScreen";

/**
 * Path to Game page
 */
export const GAME_PAGE_PATH = "/game";

/**
 * Game page component
 */
export const GamePage: React.FC = () => {
  const GAME_CONTAINER_STYLES = clsx(styles.container);

  return (
    <div className={GAME_CONTAINER_STYLES}>
      <GameInfoScreen />
      <GameScreen />
    </div>
  );
};
