import {ExampleService} from "./ExampleService";

const serviceExampleConfig: {pathToBack: string} = {pathToBack: "http://path/to/back"};

export const exampleService: ExampleService = new ExampleService(serviceExampleConfig);