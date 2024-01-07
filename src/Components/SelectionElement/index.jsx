import { CorrectIcon, IncorrectIcon } from 'Assets'
import { indexToAlphabet } from 'Constants/indexToAlphabet'
import { useQuizContext } from 'Contexts/QuizContextProvider'

function SelectionElement({ option, index }) {
	const {
		currentQuiz,
		setSelectedOption,
		currentQuestion,
		selectedOption,
		showResults
	} = useQuizContext()

	const active = selectedOption === option
	const answer = currentQuiz.questions[currentQuestion].answer

	const resultClassName =
		active && showResults
			? option === answer
				? 'selection-element--correct-option'
				: 'selection-element--incorrect-option'
			: ''

	const Icon = answer === option ? CorrectIcon : IncorrectIcon

	function onClick() {
		if (showResults) return

		setSelectedOption(option)
	}

	return (
		<button
			onClick={onClick}
			className={`selection-element ${resultClassName} ${
				active && !showResults ? 'selection-element--active' : ''
			}`}
		>
			<div className='selection-element__option-marker'>
				{indexToAlphabet[index]}
			</div>
			<p className='selection-element__option'>{option}</p>
			{showResults ? <Icon className='selection-element__result-icon' /> : null}
		</button>
	)
}

export default SelectionElement
