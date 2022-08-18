import React, {useState} from "react";
import data from "../../data.json";
// import {IScore, IQuestionIndex, IAnswer, IAll} from "../services/IQuestionService";
// import {QuestionFunction} from "../services/Functions";

// Компонент Question включает в себя все элементы анкеты (вопросы и ответы)

export interface IScore {
  score: number;
  // setScore: React.SetStateAction<IScore> => void;
}

export interface IQuestionIndex {
  questionIndex: number;
}

export interface IAnswer {
  answer: string;
}

export interface IAll extends IScore, IQuestionIndex, IAnswer { }

export interface Qqq {
  setScore: number,
  setQuestionIndex: number,
  setAnswer: string;
}

const Questions: React.FC = () => {

  const [score, setScore] = useState<number | 0>(0);
  const [questionIndex, setQuestionIndex] = useState<number | 0>(0);
  const [answer, setAnswer] = useState<string | "">("");

  // const [score, setScore] = useState(0);
  // const [questionIndex, setQuestionIndex] = useState(0);
  // const [answer, setAnswer] = useState("");

  // сброс счетчика очков до 0

  const restart: React.FC = () => {
	  // useEffect(() => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
	  // }, []);
  };

  // useEffect(() => {
  //   setScore(0);
  //   setAnswer("");
  //   setQuestionIndex(0);
  // }, []);

  // const restart = (): void => {
  //   setScore(0);
  //   setAnswer("");
  //   setQuestionIndex(0);
  // };

  /* функция отправки ответа на вопрос. Если выбранный ответ совпадает со значением ключа rightAnswer,
	то количество очков увеличивается на 1
	*/

  const submit: React.FC = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (answer === data[questionIndex]?.rightAnswer) {
      setScore((score: number) => { return score + 1; });
    }
    if (questionIndex < data.length) {
      setQuestionIndex((i: number) => { return i + 1; });
    }
  };

  /* если индекс вопроса меньше длины массива с вопросами, то на странице будет выводиться новый вопрос,
	если же нет - то будет выводиться result
	*/

  if (questionIndex < data.length) {
    return (
      <div>
        <label><h3>{data[questionIndex]?.question}</h3></label>
        {data[questionIndex]?.choices.map((c: string) => {
          return (
            <h5>
              <label>
                <input
                  type="radio"
                  name="choice"
                  value={c}
                  onChange={(e) => { return setAnswer(e.target.value); }}
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