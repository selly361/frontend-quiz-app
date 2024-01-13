import { useQuizContext } from 'Contexts/QuizContextProvider'
import React from 'react'

function Button() {
	const {
		quizCompleted,
		nextQuestion,
		submitAnswer,
		showResults,
		resetQuiz,
		started
	} = useQuizContext()

	function onClick() {
		if (quizCompleted) resetQuiz()
		else if (showResults) nextQuestion()
		else submitAnswer()
	}

	const buttonText = showResults
		? 'Next Question'
		: quizCompleted
		? 'Play Again'
		: 'Submit Answer'

	return (started ? <button onClick={onClick} className='button'>{buttonText}</button> : null)
}

export default Button
