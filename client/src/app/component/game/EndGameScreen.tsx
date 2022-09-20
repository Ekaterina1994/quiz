import React from "react";
import {Link} from "react-router-dom";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";

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
 * @param endGameScreenProps
 * @returns
 */
export const EndGameScreen: React.FC<EndGameScreenProps> = (props: EndGameScreenProps) => {
  return (
    <div>
      <Link title="To main" to={MAIN_PAGE_PATH} />
      <Paragraph text={`score: ${props.score}`} />
    </div>
  );
};
