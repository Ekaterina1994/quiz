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
   * Service url addres
   */
  private baseUrl: string;

  /**
   * @param baseUrl service addres
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Returns quiz rounds
   */
  public async getRounds(): Promise<RoundModel[]> {

    const roundsDTO: RoundDTO[] = await fetchRequest.get(this.baseUrl);

    const rounds = roundsDTO.map((round: RoundDTO) => {
      return new RoundModel(round);
    });

    return rounds;
  }

}
