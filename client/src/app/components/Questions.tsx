import React, {useState, useEffect} from "react";
import data from "../../data.json";

// Компонент Question включает в себя все элементы анкеты (вопросы и ответы)

// interface IScore {
//   score: number;
//   setScore: React.Dispatch<React.SetStateAction<number>>;
// }

const Questions: React.FC = () => {

  const [score, setScore] = useState<number>(0);
  // const [questionIndex, setQuestionIndex] = useState<number>(0);
  // const [answer, setAnswer] = useState<string>("");

  // сброс счетчика очков до 0

  // useEffect(() => {
  //   setScore(0);
  //   setAnswer("");
  //   setQuestionIndex(0);
  // }, []);

  const restart = () => {
    setScore: React.Dispatch<React.SetStateAction<number>>;
  //   setAnswer("");
  //   setQuestionIndex(0);
  };

  /* функция отправки ответа на вопрос. Если выбранный ответ совпадает со значением ключа rightAnswer,
	то количество очков увеличивается на 1
	*/

  const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	  event.preventDefault();
	  if (answer === data[questionIndex].rightAnswer) {
	    setScore((score: number) => { return score + 1; });
	  }
	  if (questionIndex < data.length) {
	    setQuestionIndex((i) => { return i + 1; });
	  }
  };

  /* если индекс вопроса меньше длины массива с вопросами, то на странице будет выводиться новый вопрос,
	если же нет - то будет выводиться result
	*/

  if (questionIndex < data.length) {
	  return (
  <div>
        <label><h3>{data[questionIndex].question}</h3></label>
        {data[questionIndex].choices.map((c: any, i) => {
	        return (
  <h5>
              <label>
      <input
                  type="radio"
                  name="choice"
                  value={c}
                  onChange={(e) => { return setAnswer(e.target.value); }}
                  checked={answer === c}
                  key={data.id}
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
          restart
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