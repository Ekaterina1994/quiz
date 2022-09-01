import React from "react";
import Questions from "../modules/Questions";
import Headline from "../components/Headline";

const TITLE = "Hello, Quiz!";

/**
 * Страница с заголовком и компонентой - вопросами
 */
const Quiz: React.FC = () => {

  return (
    <div>
      <Headline headline={TITLE} />
      <Questions />
    </div>
  );
};

export default Quiz;
