import React, {useContext, useState} from "react";
import clsx from "clsx";
import styles from "src/app/logic/game/gamePage/GamePage.module.scss";
import {Link} from "src/app/component/link/Link";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {GameContext, GameStoreInterface} from "src/app/logic/game/GameStore";
import {Headline} from "src/app/component/headline/Headline";
import {CheckAnswer} from "src/app/logic/game/gamePage/answers/Answers";
import {Button} from "src/app/component/button/Button";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {RoundModel} from "src/app/model/RoundModel";
import {getElementByIndex} from "src/app/utils/arrayUtils";
import {useNavigate} from "react-router-dom";
import {AFTER_GAME_PAGE_PATH} from "src/app/logic/game/afterGamePage/AfterGamePage";

/**
 * Path to Game page
 */
export const GAME_PAGE_PATH = "/game";

/**
 * Game page component
 */
export const GamePage: React.FC = () => {
  const navigation = useNavigate();
  const GAME_PAGE_STYLES = clsx(styles.container);

  const {scores, setScores, rounds}: GameStoreInterface = useContext(GameContext);

  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [checkedAnswerId, setCheckedAnswerId] = useState<string | null>(null);
  const resetCheckedAnswerId = (): void => {
    return setCheckedAnswerId(null);
  };

  const checkAnswer: () => void = () => {
    if (checkedAnswerId === null) {
      return;
    }

    const {rightAnswerId}: RoundModel = getElementByIndex(rounds, currentRoundIndex);
    const isRightAnswer: boolean = checkedAnswerId === rightAnswerId;
    const isMoreQuestionsAvailable: boolean = currentRoundIndex < rounds.length - 1;

    if (isRightAnswer) {
      setScores(scores + 1);
    }

    if (isMoreQuestionsAvailable) {
      setCurrentRoundIndex(currentRoundIndex + 1);
      resetCheckedAnswerId();
    } else {
      navigation(AFTER_GAME_PAGE_PATH);
    }
  };

  return (
    <div className={GAME_PAGE_STYLES}>
      <Link text="To main" to={MAIN_PAGE_PATH} />
      <Headline text={getElementByIndex(rounds, currentRoundIndex).question} />
      <CheckAnswer
        answerVariants={getElementByIndex(rounds, currentRoundIndex).answerVariants}
        setCheckedAnswerId={setCheckedAnswerId}
      />
      <Button text="Check" onClick={checkAnswer} />
      <Paragraph text={`score: ${scores}`} />
    </div>
  );
};
