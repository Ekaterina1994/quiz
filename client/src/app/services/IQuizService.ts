import { Quiz } from "src/app/logic/model/Quiz";

// Service methods for work with quiz
export default interface IQuizService {
    
	// Create Quiz
    getData(project: Quiz): Promise<Quiz[]>;

}