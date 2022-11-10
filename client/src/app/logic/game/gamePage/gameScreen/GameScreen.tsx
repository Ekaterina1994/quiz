import React, {useContext} from "react";
import clsx from "clsx";
import styles from "src/app/logic/game/gamePage/GamePage.module.scss";
import {GameContext, GameStoreInterface} from "src/app/logic/game/GameStore";
import {getElementByIndex} from "src/app/utils/arrayUtils";
import {RoundDTO} from "src/app/model/RoundDTO";

/**
 * Main game screen
 */
export const GameScreen: React.FC = () => {
  const GAME_MAIN_STYLES = clsx(styles.main);
  const GAME_CIRCLES_STYLES = clsx(styles.circles);
  const GAME_CIRCLE_STYLES = clsx(styles.circle);
  const {rounds}: GameStoreInterface = useContext(GameContext);

  return (
    <div className={GAME_MAIN_STYLES}>
      <div className={GAME_CIRCLES_STYLES}>
        {rounds
          .map((round: RoundDTO) => {
            return (
              <div
                className={GAME_CIRCLE_STYLES}
                key={round.id}
              >
                {parseInt(getElementByIndex(rounds, parseInt(round.id, 10)).id, 10) + 1}
              </div>
            );
          })}
      </div>
    </div>
  );
};
