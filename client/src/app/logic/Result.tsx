import React from "react";
import Headline from "../components/Headline";

const RESULT = "Result";

/**
 * Компонента выводящая результат
 */
const Result: React.FC = () => {

  return (
    <div>
      <Headline headline={RESULT} />
    </div>
  );
};

export default Result;
