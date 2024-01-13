import React from 'react'
import { Button, SelectionElements, Subjects, QuizResult, QuizError } from 'Components'
import { useQuizContext } from 'Contexts/QuizContextProvider'

function InteractiveQuizSection() {
	const { started, isChanging, quizCompleted } = useQuizContext()

	const render = () => {
		if (started && !quizCompleted) {
			return (
				<>
					<SelectionElements />
					<Button />
					<QuizError />
				</>
			)
		} else if (quizCompleted) {
			return <>
			<QuizResult />
			<Button />
			</>
		} else {
			return <Subjects />
		}
	}

	return (
		<div className={`interactive-quiz-section ${isChanging ? 'interactive-quiz-section--animation' : ''}`}>
			{render()}
		</div>
	)
}

export default InteractiveQuizSection
