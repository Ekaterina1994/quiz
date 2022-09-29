import {RoundServiceStub} from "src/app/service/round/RoundServiceStub";
import {RoundService} from "src/app/service/round/RoundService";
import {RoundServiceInterface} from "src/app/service/round/RoundServiceInterface";

const config = {
  /**
   * Connection game mode
   */
  IS_MODE_OFFLINE: false,

  /**
   * Url address to server
   */
  ROUND_API_URL: "/api/quiz",
};

/**
 * Provide rounds methods
 */
export const roundService: RoundServiceInterface = config.IS_MODE_OFFLINE
  ? new RoundServiceStub()
  : new RoundService(config.ROUND_API_URL);