import { useQuizContext } from 'Contexts/QuizContextProvider'
import React from 'react'

function ProgressBar() {
	const { currentQuiz, currentQuestion } = useQuizContext()

	const progress = Math.round(((currentQuestion + 1) / currentQuiz.questions?.length) * 100)

	return (
		<div className='progress-bar'>
			<div style={{ width: `${progress}%` }} className='progress-bar__bar' />
		</div>
	)
}

export default ProgressBar
