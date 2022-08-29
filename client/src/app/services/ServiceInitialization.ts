import {ExampleService} from "./ExampleService";

/**
 * Объявление переменной serviceExampleConfig, которая указывает путь получения данных
 */
const PATH_TO_BACK: string = "http://path/to/back";

const serviceExampleConfig: {pathToBack: string} = {pathToBack: `${PATH_TO_BACK}`};

/**
 * Объявление константы, с помощью которой можно создавать новые классы на основе созданного ранее
 */
export const exampleService: ExampleService = new ExampleService(serviceExampleConfig);