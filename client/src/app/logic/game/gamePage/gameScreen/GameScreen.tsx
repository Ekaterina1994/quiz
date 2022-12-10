import React, {useContext} from "react";
import clsx from "clsx";
import styles from "src/app/logic/game/gamePage/GamePage.module.scss";
import {GameContext, GameStoreInterface} from "src/app/logic/game/GameStore";
import {RoundContext, RoundStoreInterface} from "src/app/logic/game/RoundStore";
import {RoundDTO} from "src/app/model/RoundDTO";

/**
 * Main game screen
 */
export const GameScreen: React.FC = () => {
  const GAME_MAIN_STYLES = clsx(styles.main);
  const GAME_CIRCLES_STYLES = clsx(styles.circles);
  const GAME_CIRCLE_STYLES = clsx(styles.circle);
  const ACTIVE_CIRCLE_STYLES = clsx(styles.active);
  const {rounds}: GameStoreInterface = useContext(GameContext);
  const {setCurrentRoundIndex}: RoundStoreInterface = useContext(RoundContext);

  return (
    <div className={GAME_MAIN_STYLES}>
      <div className={GAME_CIRCLES_STYLES}>
        {rounds
          .map((round: RoundDTO) => {
            return (
              <button
                className={GAME_CIRCLE_STYLES}
                id={round.id}
                key={round.id}
                onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  setCurrentRoundIndex(parseInt(round.id, 10));
                  event.currentTarget.classList.add(ACTIVE_CIRCLE_STYLES);
                }
                }
                type="button"
              >
                {parseInt(round.id, 10) + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};
