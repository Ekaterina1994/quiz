import React from "react";
import {Paragraph} from "src/app/component/paragraph/Paragraph";

/**
 * @description Screen shows after end of the game
 * @param EndGameScreenProps
 * @returns
 */
export const StartGameScreen: React.FC = () => {
  return (
    <Paragraph text="Loading, please wait... " />
  );
};
