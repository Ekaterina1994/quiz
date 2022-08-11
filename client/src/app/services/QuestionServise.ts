import {Question} from "./Model/Question";
import IQuestionService from "./IQuestionService";

/**
 * Сервис для работы с проектами
 */
class QuestionService implements IQuestionService {

	public async getAllProjects(): Promise<Question> {
		const [score, setScore] = useState(0);
		const [questionIndex, setQuestionIndex] = useState(0);
		const [answer, setAnswer] = useState("");

		const restart = () => {
			setScore(0);
			setAnswer("");
			setQuestionIndex(0);
		};

		
		const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.preventDefault();
			if (answer === data[questionIndex].rightAnswer) {
				setScore((score) => { return score + 1; });
			}
			if (questionIndex < data.length) {
				setQuestionIndex((i) => { return i + 1; });
			}
		};


		if (questionIndex < data.length) {
			return (
				<div>
					<label><h3>{data[questionIndex].question}</h3></label>
					{data[questionIndex].choices.map((c: any, i) => {
						return (
							<h5>
								<label>
									<input
										type="radio"
										name="choice"
										value={c}
										onChange={(e) => { return setAnswer(e.target.value); }}
										checked={answer === c}
										key={data.id}
									/>
									<span>{c}</span>
								</label>
							</h5>
						);
					})}
	
					<button
						className="waves-effect waves-light btn-large"
						type="button"
						onClick={submit}
					>
						check
					</button>
	
					<p>
						score:
						{score}
					</p>
				</div>
			);
		}
	
		return (
			<form>
				<div>
					<button
						className="waves-effect waves-light btn-large"
						type="button"
						onClick={restart}
					>
						restart
					</button>
				</div>
				<h5>
					score:
					{score}
				</h5>
			</form>
		);
	};

}

export default QuestionService;