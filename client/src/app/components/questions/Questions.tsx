import React from "react";
import styles from "src/app/components/button/Button.module.scss";
import useHooks from "./UseHooks";

// Question component
const Questions: React.FC = () => {

  // Call custom hook
  const [score, questionIndex, answer, data, methods] = useHooks();

  // If index of question less then length of array with questions,
  // then new question will show on the page, if not - then result will show
  if (data) {
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
                    onChange={methods.onChange}
                    checked={answer === c}
                    key={data[questionIndex]?.key}
                  />
                  <span>{c}</span>
                </label>
              </h5>
            );
          })}

          <button
            className={styles.btn}
            type="button"
            onClick={methods.submit}
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
  }

  return (
    <form>
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={methods.restart}
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