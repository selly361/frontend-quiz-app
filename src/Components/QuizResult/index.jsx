import { SubjectIcon } from 'Components'
import { useQuizContext } from 'Contexts/QuizContextProvider'
import React from 'react'

function QuizResult() {

	const { currentQuiz, started, score } = useQuizContext()

	return started ? (
		<div className='quiz-result'>
			<SubjectIcon index={currentQuiz.index} />
			<h5 className='quiz-result__result'>{score}</h5>
			<p className='quiz-result__text'>Out of 10</p>
		</div>
	) : null
}

export default QuizResult
