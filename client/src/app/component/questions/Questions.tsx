import React, {ReactElement} from "react";
import {Button} from "src/app/component/button/Button";
import {Paragraph, PARAGRAPH_STYLES} from "src/app/component/paragraph/Paragraph";
import {useQuizMethods} from "src/app/component/questions/UseQuizMethods";
import {getChoicesByQuestionIndex, getQuestionByQuestionIndex} from "src/app/component/questions/Helpers";
import {Headline} from "src/app/component/headline/Headline";

/**
 * Component for displaying quiz questions and answer options
 */
export const Questions: React.FC = () => {

  const [score, questionIndex, answer, questions, methods] = useQuizMethods();

  const renderAnswerElement = (choice: string, index: number): ReactElement => {
    return (
      <label key={choice}>
        <input
          type="radio"
          name="choice"
          value={choice}
          onChange={methods.checkAnswer}
          checked={answer === choice}
          key={index}
        />
        <span className={PARAGRAPH_STYLES}>{choice}</span>
      </label>
    );
  };

  const renderAnswers = (): ReactElement[] | undefined => {
    const choicesChoices = getChoicesByQuestionIndex(questionIndex, questions);
    return choicesChoices.map(renderAnswerElement);
  };

  const isLastQuestion = questionIndex < questions.length;

  if (isLastQuestion) {
    return (
      <>
        <Headline text={getQuestionByQuestionIndex(questionIndex, questions)} />
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