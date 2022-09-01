import {QuizService} from "./QuizService";

const PATH_TO_BACK = "http://path/to/back";

const serviceExampleConfig: {pathToBack: string} = {pathToBack: `${PATH_TO_BACK}`};

// Creating a new class based on Example Service
export const quizService: QuizService = new QuizService(serviceExampleConfig);