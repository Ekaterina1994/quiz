/**
 * INterface to describe types of one element among all questions
 */

export interface questionsRoundDTO {
  question: string;
  choices: string[];
  rightAnswer: string;
  key: string;
}