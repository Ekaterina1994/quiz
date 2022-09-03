import {QuizServiceStub} from "src/app/services/QuizServiceStub";
import config from "src/app/config.json";
import {QuizService} from "./QuizService";

// Creating a new class based on Example Service
export const quizService = config.IS_MODE_STUB ? new QuizServiceStub() : new QuizService(config.BASE_URL);