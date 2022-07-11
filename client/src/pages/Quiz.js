import React from "react";
import { Question } from "../components/Question";
import { Button } from "../components/Button";

export const Quiz = () => {
	return (
		<div>
			<h1>Hello, Quiz!</h1>
			<Question question="Which color do you like?" />
			<Question question="Which color does your mother like?" />
			<Question question="Which color does your brother like?" />
			<Button />
		</div>
	)
}