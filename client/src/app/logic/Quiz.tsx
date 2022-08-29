import React from "react";
import Questions from "../modules/Questions";
import Headline from "../components/Headline";

/**
 * Страница с заголовком и компонентой - вопросами
 */
const Quiz: React.FC = () => {
  return (
    <div>
      <Headline headline="Hello, Quiz!" />
      <Questions />
    </div>
  );
};

export default Quiz;
