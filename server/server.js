import express from "express";

const app = express();

const PORT = 5000;

app.get("/api/quiz", (req, res) =>
{
  const quiz = [
    {
      "question": "What color is the grass?",
      "answerVariants": [
        {
          "id":"0",
          "answer": "Red"
        }, {
          "id":"1",
          "answer": "Blue"
        }, {
          "id":"2",
          "answer": "Green"
        }
      ],
      "rightAnswerId": "2",
      "id": "0"
    },
    {
      "question": "What do cats like to eat?",
      "answerVariants": [
        {
          "id":"3",
          "answer": "Cheese"
        }, {
          "id":"4",
          "answer": "Fish"
        }, {
          "id":"5",
          "answer": "Potato"
        }
      ],
      "rightAnswerId": "4",
      "id": "1"
    },
    {
      "question": "What color is polar bear fur?",
      "answerVariants": [
        {
          "id":"6",
          "answer": "Brown"
        }, {
          "id":"7",
          "answer": "White"
        }, {
          "id":"8",
          "answer": "Grey"
        }
      ],
      "rightAnswerId": "7",
      "id": "2"
    }
  ];

  res.json(quiz);
});

app.listen(PORT, (req, res) =>
{
  console.log(`Server started on PORT ${PORT}`);
});


