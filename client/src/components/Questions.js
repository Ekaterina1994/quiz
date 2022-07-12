import React, { useState } from "react";

const data = [
  {
    question: "What is your name?",
    choices: ["Anna", "Victor", "Olga"],
    rightAnswer: "Anna"
  },
  {
    question: "What is your mother name?",
    choices: ["Anna", "Kate", "Olga"],
    rightAnswer: "Olga"
  },
  {
    question: "What is your father name?",
    choices: ["Victor", "Boris", "Slava"],
    rightAnswer: "Boris"
  }
];

const Questions = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const restart = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };
  const submit = (e) => {
    e.preventDefault();
    if (answer === data[questionIndex].rightAnswer) {
      setScore((score) => score + 1);
    }
    if (questionIndex < data.length) {
      setQuestionIndex((i) => i + 1);
    }
  };
  if (questionIndex < data.length) {
    return (
      <div>
        <label><h3>{data[questionIndex].question}</h3></label>
        {data[questionIndex].choices.map((c, i) => {
          return (
            <h5>
							<label>
              <input
                type="radio"
                name="choice"
                value={c}
                onChange={(e) => setAnswer(e.target.value)}
                checked={answer === c}
              />
							<span>{c}</span>
							</label>
            </h5>
          );
        })}
        <button className="waves-effect waves-light btn-large" type="button" onClick={submit}>
          check
        </button>
        <p>score: {score}</p>
      </div>
    );
  } else {
    return (
      <form>
        <div>
          <button className="waves-effect waves-light btn-large" type="button" onClick={restart}>
            restart
          </button>
        </div>
        <h5>score: {score}</h5>
      </form>
    );
  }
};

export default Questions;
