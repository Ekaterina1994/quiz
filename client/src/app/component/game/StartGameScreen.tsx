import React from "react";
import {Paragraph} from "src/app/component/paragraph/Paragraph";

/**
 * @description Screen appeared  before the game
 * Used for loading, providing extra info about game etc.
 */
export const StartGameScreen: React.FC = () => {
  return (
    <Paragraph text="Loading, please wait... " />
  );
};
