import React from "react";
import Questions from "../components/Questions";

/**
 * Страница с заголовком и компонентой - вопросами
 */
const Quiz: React.FC = () => {
  return (
    <div>
      <h1>Hello, Quiz!</h1>
      <Questions />
    </div>
  );
};

export default Quiz;
