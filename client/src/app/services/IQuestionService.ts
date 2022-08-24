export interface IScore {
  score: number;
}

export interface IQuestionIndex {
  questionIndex: number;
}

export interface IAnswer {
  answer: string;
}

export interface IAll extends IScore, IQuestionIndex, IAnswer { }

export interface IFunctions {
  setScore: number;
  setAnswer: string;
  setQuestionIndex: number;
}