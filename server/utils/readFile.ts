import fs from "fs";

const FILE_PATH: string = "./quiz.json";

let QUIZ: string;

// A string with datas which were converted from json file
export const readFile = () => {
  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      QUIZ = JSON.parse(data);
      return QUIZ;
    }
  });
} 