import data from "../store/data.json";

export type Question = {
  question: string;
  choices: string[];
  rightAnswer: string;
  key: number;
}

export class ExampleService {

  public pathToBack: string;

  public data: Array<Question> = data;

  constructor(config: any) {
    this.pathToBack = config.pathToBack;
  }

  public async getDataExample(): Promise<Question[]> {
    // fetch data or something else
    return this.data;
  }

}