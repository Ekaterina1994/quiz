import {ExampleService} from "./ExampleService";

/**
 * Объявление переменной serviceExampleConfig, которая указывает путь получения данных
 */
const serviceExampleConfig: {pathToBack: string} = {pathToBack: "http://path/to/back"};

/**
 * Объявление константы, с помощью которой можно создавать новые классы на основе созданного ранее
 */
export const exampleService: ExampleService = new ExampleService(serviceExampleConfig);