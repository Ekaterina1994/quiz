import React, {useEffect, useState, useContext} from "react";
import {Button} from "src/app/component/button/Button";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {Headline} from "src/app/component/headline/Headline";
import {RoundModel} from "src/app/model/RoundModel";
import {roundService} from "src/app/service/ServiceInitialization";
import {StartGameScreen} from "src/app/component/game/StartGameScreen";
import {getElementByIndex} from "src/app/utils/arrayUtils";
import {ScoreContext} from "src/ScoreContext";
// import {AfterGamePage} from "src/app/logic/afterGamePage/AfterGamePage";
import {EndGameScreen} from "./EndGameScreen";
import {CheckAnswer} from "./Answers";

/**
 * Component for displaying quiz questions and answer options
 */
export const GameScreen: React.FC = () => {

  // const [scores, setScores] = useState<number>(0);
  const [rounds, setRounds] = useState<RoundModel[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [checkedAnswerId, setCheckedAnswerId] = useState<string | null>(null);
  const resetCheckedAnswerId = (): void => {return setCheckedAnswerId(null);};

  const {scores, setScores} = useContext<any>(ScoreContext);

  const initGame: () => void = async () => {
    const insertQuizData: RoundModel[] = await roundService.getRounds();
    setRounds(insertQuizData);
  };

  useEffect(() => {
    initGame();
  }, []);

  const checkAnswer: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    event.preventDefault();

    // answer was not checked
    if (checkedAnswerId === null) {
      return;
    }

    const {rightAnswerId}: RoundModel = getElementByIndex(rounds, currentRoundIndex);
    const isRightAnswer: boolean = checkedAnswerId === rightAnswerId;
    const isMoreQuestionsAvailable: boolean = currentRoundIndex < rounds.length;

    if (isRightAnswer) {
      setScores(scores + 1);
    }

    if (isMoreQuestionsAvailable) {
      setCurrentRoundIndex(currentRoundIndex + 1);
      resetCheckedAnswerId();
    }
  };

  const isRoundsLoaded = rounds.length !== 0;
  const currentRoundExist = currentRoundIndex < rounds.length;

  // before game
  if (!isRoundsLoaded) {
    <StartGameScreen />;
  }

  // game in process
  if (isRoundsLoaded && currentRoundExist) {
    return (
      <>
        <Headline text={getElementByIndex(rounds, currentRoundIndex).question} />
        <CheckAnswer
          answerVariants={getElementByIndex(rounds, currentRoundIndex).answerVariants}
          setCheckedAnswerId={setCheckedAnswerId}
        />
        <Button text="Check" handleClick={checkAnswer} />
        <Paragraph text={`score: ${scores}`} />
      </>
    );
  }

  // after game
  return (
    // <AfterGamePage />
    <EndGameScreen />
  );
};
