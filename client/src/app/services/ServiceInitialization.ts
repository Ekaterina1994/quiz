import {QuizService} from "src/app/services/QuizService";

const serviceConfig: {pathToData: string} = {pathToData: "../store/data.json"};

// Creating a new class based on Example Service
export const quizService: QuizService = new QuizService(serviceConfig);