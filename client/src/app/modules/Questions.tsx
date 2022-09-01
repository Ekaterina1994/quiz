import React, {useState, useEffect} from "react";
import {Quiz} from "src/app/logic/model/Quiz";
import {quizService} from "../services/ServiceInitialization";
import styles from "../components/Button.module.scss";

// Question component
const Questions: React.FC = () => {

  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  const [data, setData] = useState<Quiz[]>([]);
  const loadData: () => void = async () => {
    const newData: Quiz[] = await quizService.getDataExample();
    setData(newData);
  };
  useEffect(() => {
    loadData();
  }, []);

  // Function for set Score to 0
  const restart: () => void = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };

  // Function for to send answer. If its right answer - number of points grow
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

  // If index less then length of array with questions, then new question will show on the page, if not - then result will show
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
                  name="choice"
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
          className={styles.btn}
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
          className={styles.btn}
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