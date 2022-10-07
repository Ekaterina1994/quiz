import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {ScoreContext} from "src/ScoreContext";

/**
 * {@link EndGameScreen} props
 */
interface EndGameScreenProps {
  /**
   * Scores
   */
  score: number;
}

/**
 * @description Screen shows after end of the game
 */
export const EndGameScreen: React.FC<EndGameScreenProps> = () => {
  const {scores, setScores} = useContext(ScoreContext);
  return (
    <div>
      <Link title="To main" to={MAIN_PAGE_PATH} />
      <Paragraph text={`score: ${scores}`} />
    </div>
  );
};
