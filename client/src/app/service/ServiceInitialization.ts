import {QuizServiceStub} from "src/app/service/QuizServiceStub";
import config from "src/app/config.json";
import {QuizService} from "./QuizService";

/**
 * Creating a new class based on QuizServiceServiceStub (if we get data locally)
 * or QuizService (if we get data from internet).
 */
export const quizService = config.IS_MODE_STUB ? new QuizServiceStub() : new QuizService(config.BASE_URL);