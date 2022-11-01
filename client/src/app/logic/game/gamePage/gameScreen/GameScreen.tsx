import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/game/gamePage/GamePage.module.scss";

/**
 * Main game screen
 */
export const GameScreen: React.FC = () => {
  const GAME_MAIN_STYLES = clsx(styles.main);

  return (
    <div className={GAME_MAIN_STYLES}>
      <h1>Main game screen</h1>
    </div>
  );
};
