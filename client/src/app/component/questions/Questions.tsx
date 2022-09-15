import React from "react";
import {Button} from "src/app/component/button/Button";
import {Paragraph, PARAGRAPH_STYLES} from "src/app/component/paragraph/Paragraph";
import {useGetQuestions} from "src/app/component/questions/UseGetQuestions";
import {Headline} from "../headline/Headline";

/**
 * Component for displaying quiz questions and answer options
 */
export const Questions: React.FC = () => {

  // Call custom hook
  const [score, questionIndex, answer, question, methods] = useGetQuestions();

  const renderAnswerElement = (choice: string, index: number): any => {
    return (
      <h5 key={choice}>
        <label>
          <input
            type="radio"
            name="choice"
            value={choice}
            onChange={methods.onChange}
            checked={answer === choice}
            key={index}
          />
          <span className={PARAGRAPH_STYLES}>{choice}</span>
        </label>
      </h5>
    );
  };

  const renderAnswers = (): any => {
    return question[questionIndex]?.choices.map(renderAnswerElement);
  };

  const questionCondition = question && questionIndex < question.length;

  /**
   * If index of question less then length of array with questions,
   * then new question will show on the page, if not - then result will show
   */
  if (questionCondition) {
    return (
      <>
        <Headline text={question[questionIndex]?.question} />
        {renderAnswers()}
        <Button title="Check" handleClick={methods.submit} />
        <Paragraph text={`score: ${score}`} />
      </>
    );
  }

  return (
    <>
      <Button title="Restart" handleClick={methods.restart} />
      <Paragraph text={`score: ${score}`} />
    </>
  );
};