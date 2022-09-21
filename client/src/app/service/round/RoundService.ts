import {RoundModel} from "src/app/model/RoundModel";
import {fetchRequest} from "src/app/service/FetchUtils";
import {RoundDTO} from "src/app/model/RoundDTO";
import {RoundServiceInterface} from "src/app/service/round/RoundServiceInterface";

/**
 * Provide rounds methods
 * (Use in online mode)
 */
export class RoundService implements RoundServiceInterface {

  /**
   * Round api address
   */
  private roundUrl: string;

  /**
   * @param roundUrl round api address
   */
  constructor(roundUrl: string) {
    this.roundUrl = roundUrl;
  }

  /**
   * Returns quiz rounds
   */
  public async getRounds(): Promise<RoundModel[]> {

    const roundsDTO: RoundDTO[] = await fetchRequest.get(this.roundUrl);

    const rounds = roundsDTO.map((round: RoundDTO) => {
      return new RoundModel(round);
    });

    return rounds;
  }

}
