import {RoundModel} from "src/app/model/RoundModel";

/**
 * Abstract interface for roundService
 */
export interface RoundServiceInterface {
  /**
   * Returns quiz rounds
   */
  getRounds(): Promise<RoundModel[]>
}