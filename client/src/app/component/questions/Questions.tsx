import React from "react";
import Button from "src/app/component/button/Button";
import Paragraph from "src/app/component/paragraph/Paragraph";
import useHooks from "./UseHooks";

/**
 * Question component
 */
const Questions: React.FC = () => {

  // Call custom hook
  const [score, questionIndex, answer, question, methods] = useHooks();

  /**
	 * If index of question less then length of array with questions,
   * then new question will show on the page, if not - then result will show
	 */
  if (question) {
    if (questionIndex < question.length) {
      return (
        <>
          <label><h3>{question[questionIndex]?.question}</h3></label>
          {question[questionIndex]?.choices.map((c: string) => {
            return (
              <h5 key={c}>
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={c}
                    onChange={methods.onChange}
                    checked={answer === c}
                    key={question[questionIndex]?.key}
                  />
                  <span>{c}</span>
                </label>
              </h5>
            );
          })}
          <Button name="Check" handleClick={methods.submit} />
          <Paragraph text={`score: ${score}`} />
        </>
      );
    }
  }

  return (
    <>
      <Button name="Restart" handleClick={methods.restart} />
      <Paragraph text={`score: ${score}`} />
    </>
  );
};

export default Questions;