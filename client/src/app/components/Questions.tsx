import React from "react";
import QuestionsService, {submit, restart} from "../services/QuestionsService";
import data from "../../data.json";

// Questions - компонента включающая в себя все элементы анкеты

const Questions: React.FC = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  {/* <QuestionsService /> */}
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
