import {Question} from "../model/Question";

/**
 * Методы сервиса для работы с проектами
 */
export default interface IQuestionService {

  /**
	 * Получает доступные вопросы
	 */
  getAllQuestions(): Promise<Question[]>;

};;;;;;;;;;;;;;;;;;;;;;