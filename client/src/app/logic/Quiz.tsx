import React from "react";
import "materialize-css";
import Questions from "src/app/components/questions/Questions";
import Headline from "src/app/components/headline/Headline";

const TITLE = "Hello, Quiz!";

/**
 * Quiz page
 */
const Quiz: React.FC = () => {

  return (
    <section className="container">
      <Headline headline={TITLE} />
      <Questions />
    </section>
  );
};

export default Quiz;
