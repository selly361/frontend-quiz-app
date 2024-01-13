import { IncorrectIcon } from 'Assets'
import { useQuizContext } from 'Contexts/QuizContextProvider'
import React from 'react'

function QuizError() {
	const { error } = useQuizContext()

  	if(!error) return null

	return (
		<p className='quiz-error'>
			<IncorrectIcon /> Please select an answer
		</p>
	)
}

export default QuizError