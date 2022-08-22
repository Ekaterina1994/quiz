import React, {useState} from "react";
import data from "../../data.json";
// import {IAll} from "../services/IQuestionService";
// import {QuestionFunction} from "../services/Functions";

/**
 * Компонент Question включает в себя все элементы анкеты (вопросы и ответы)
 */

const Questions: React.FC = () => {

  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  /**
 	 * сброс счетчика очков до 0
	 */

  const restart: () => void = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };

  /**
	 *  Функция отправки ответа на вопрос. Если выбранный ответ совпадает со значением ключа rightAnswer,
	 *  то количество очков увеличивается на 1
   */
  const submit: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    event.preventDefault();

    const isRightAnswer: boolean = answer === data[questionIndex]?.rightAnswer;
    if (isRightAnswer) {
      setScore(score + 1);
    }

    const isMoreQuestionsAvailable: boolean = questionIndex < data.length;
    if (isMoreQuestionsAvailable) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  /**
	 * если индекс вопроса меньше длины массива с вопросами, то на странице будет выводиться новый вопрос,
	 * если же нет - то будет выводиться result
	 */

  if (questionIndex < data.length) {
    return (
      <div>
        <label><h3>{data[questionIndex]?.question}</h3></label>
        {data[questionIndex]?.choices.map((c: string) => {
          return (
            <h5 key={c}>
              <label>
                <input
                  type="radio"
                  //  name="choice"
                  value={c}
                  onChange={onChange}
                  checked={answer === c}
                  key= {data[questionIndex]?.key}
                />
                <span>{c}</span>
              </label>
            </h5>
          );
        })}

        <button
          className="waves-effect waves-light btn-large"
          type="button"
          onClick={submit}
        >
          check
        </button>

        <p>
          score:
          {score}
        </p>
      </div>
    );
  }

  return (
    <form>
      <div>
        <button
          className="waves-effect waves-light btn-large"
          type="button"
          onClick={restart}
        >
          Restart
        </button>
      </div>
      <h5>
        score:
        {score}
      </h5>
    </form>
  );
};

export default Questions;