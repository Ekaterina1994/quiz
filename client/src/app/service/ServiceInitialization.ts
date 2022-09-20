import {RoundServiceStub} from "src/app/service/round/RoundServiceStub";
import {RoundService} from "src/app/service/round/RoundService";
import {RoundServiceInterface} from "src/app/service/round/RoundServiceInterface";
import config from "src/app/config.json";

/**
 * Class base on QuizServiceServiceStub (if we get data locally)
 * or QuizService (if we get data from internet).
 */
export const roundService: RoundServiceInterface = config.IS_MODE_STUB
  ? new RoundServiceStub()
  : new RoundService(config.BASE_URL);