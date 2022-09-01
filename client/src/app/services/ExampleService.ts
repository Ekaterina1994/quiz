import data from "../store/data.json";

// Question model
export type Question = {
  question: string;
  choices: string[];
  rightAnswer: string;
  key: number;
}

// Class which describe path for get data
export class ExampleService {

  public pathToBack: string;

  public data: Array<Question> = data;

  constructor(config: any) {
    this.pathToBack = config.pathToBack;
  }

  // Method which return data
  public async getDataExample(): Promise<Question[]> {
    // fetch data or something else
    return this.data;
  }

}