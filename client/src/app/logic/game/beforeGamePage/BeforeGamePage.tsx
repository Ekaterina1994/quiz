import clsx from "clsx";
import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "src/app/component/link/Link";
import {PageBorder} from "src/app/component/pageBorder/PageBorder";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import styles from "src/app/logic/game/beforeGamePage/BeforeGamePage.module.scss";
import {GAME_PAGE_PATH} from "src/app/logic/game/gamePage/GamePage";
import {GameContext, GameStoreInterface} from "src/app/logic/game/GameStore";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {RoundModel} from "src/app/model/RoundModel";
import {roundService} from "src/app/service/ServiceInitialization";

/**
 * Path to after game page
 */
export const BEFORE_GAME_PAGE_PATH = "/before-game";

/**
 * @description Page appeared  before the game
 * Used for loading, providing extra info about game etc.
 */
export const BeforeGamePage: React.FC = () => {
  const navigate = useNavigate();

  const BEFORE_GAME_PAGE_STYLES = clsx(styles.container);

  const {setRounds}: GameStoreInterface = useContext(GameContext);
  const [isGameInit, setIsGameInit] = useState<boolean>(false);
  useEffect(() => {
    const initGame: () => void = async () => {
      const insertQuizData: RoundModel[] = await roundService.getRounds();
      setRounds(insertQuizData);
      setIsGameInit(true);
    };

    initGame();
  }, [setRounds]);

  return (
    <PageBorder backButton={{text: "To menu", onClick: () => {return navigate(MAIN_PAGE_PATH);}}}>
      <div className={BEFORE_GAME_PAGE_STYLES}>
        <Paragraph text="Instruction... " />
        {isGameInit
          ? (
            <Link text={"Let's play"} to={GAME_PAGE_PATH} />
          )
          : (
            <Paragraph text="Loading, please wait..." />
          )
        }
      </div>
    </PageBorder>
  );
};
