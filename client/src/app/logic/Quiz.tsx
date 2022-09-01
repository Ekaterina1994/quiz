import React from "react";
import Questions from "src/app/components/questions/Questions";
import Headline from "src/app/components/headline/Headline";

const TITLE = "Hello, Quiz!";

// Quiz page
const Quiz: React.FC = () => {

  return (
    <div>
      <Headline headline={TITLE} />
      <Questions />
    </div>
  );
};

export default Quiz;
