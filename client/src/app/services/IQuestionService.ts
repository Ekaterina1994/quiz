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

export interface IAll extends IScore, IQuestionIndex, IAnswer {}