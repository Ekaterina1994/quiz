import React, {useContext} from "react";
import clsx from "clsx";
import styles from "src/app/logic/game/afterGamePage/AfterGamePage.module.scss";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {PageBorder} from "src/app/component/pageBorder/PageBorder";
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {GameContext, GameStoreInterface} from "src/app/logic/game/GameStore";

/**
 * Path to after game page
 */
export const AFTER_GAME_PAGE_PATH = "/after-game";

/**
 * After game page component
 */
export const AfterGamePage: React.FC = () => {
  const navigate = useNavigate();
  const AFTER_GAME_CONTAINER_STYLES = clsx(styles.container);

  const {scores, setScores}:GameStoreInterface = useContext(GameContext);

  const onGoToMenu: () => void = () => {
    setScores(0);
    return navigate(MAIN_PAGE_PATH);
  };

  return (
    <PageBorder backButton={{text: "To menu", onClick: onGoToMenu}}>
      <div className={AFTER_GAME_CONTAINER_STYLES}>
        <Paragraph text="After game! Scores... " />
        <Paragraph text={scores.toString()} />
      </div>
    </PageBorder>
  );
};
