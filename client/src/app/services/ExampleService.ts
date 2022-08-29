import data from "../store/data.json";

/**
 * Объявление типов для Question
 */
export type Question = {
  question: string;
  choices: string[];
  rightAnswer: string;
  key: number;
}

/**
 * Объявление класса и передача типов его параметрам
 */
export class ExampleService {

  public pathToBack: string;

  public data: Array<Question> = data;

  constructor(config: any) {
    this.pathToBack = config.pathToBack;
  }

  /**
	 * Объявление метода, который возвращает данные полученные по определенному пути (в данном случае из файла data.json)
	 */
  public async getDataExample(): Promise<Question[]> {
    // fetch data or something else
    return this.data;
  }

}