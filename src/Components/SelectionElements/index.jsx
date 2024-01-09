import { useQuizContext } from 'Contexts/QuizContextProvider'
import SelectionElement from './SelectionElement'

function SelectionElements() {
	const { currentQuestion, currentQuiz } = useQuizContext()

	return (
		<div className='selection-elements'>
			{currentQuiz.questions
				? currentQuiz.questions[currentQuestion].options.map((option, i) => (
						<SelectionElement option={option} index={i} />
				  ))
				: null}
		</div>
	)
}

export default SelectionElements
