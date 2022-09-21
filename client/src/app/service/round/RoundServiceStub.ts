import {RoundModel} from "src/app/model/RoundModel";
import roundsDTO from "src/app/roundsDTO.json";
import {RoundDTO} from "src/app/model/RoundDTO";
import {RoundServiceInterface} from "src/app/service/round/RoundServiceInterface";

/**
 * Provide rounds methods
 * (Use in offline mode)
 */
export class RoundServiceStub implements RoundServiceInterface {

  /**
   * Returns quiz rounds
   */
  public async getRounds(): Promise<RoundModel[]> {

    const rounds = (roundsDTO as RoundDTO[]).map((round: RoundDTO) => {
      return new RoundModel(round);
    });

    return rounds;
  }

}
