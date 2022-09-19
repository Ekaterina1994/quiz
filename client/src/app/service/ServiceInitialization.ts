import {QuizServiceStub} from "src/app/service/serviceStub/QuizServiceStub";
import config from "src/app/config.json";
import {QuizService} from "src/app/service/QuizService";
import {QuizServiceMethods} from "src/app/service/QuizServiceMethods";

/**
 * Class base on QuizServiceServiceStub (if we get data locally)
 * or QuizService (if we get data from internet).
 */
export const quizService: QuizServiceMethods = config.IS_MODE_STUB ? new QuizServiceStub() : new QuizService(config.BASE_URL);