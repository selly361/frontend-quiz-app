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
				? 'selection-elements__element--correct-option'
				: 'selection-elements__element--incorrect-option'
			: ''

	const Icon = answer === option ? CorrectIcon : IncorrectIcon

	function onClick() {
		if (showResults) return

		setSelectedOption(option)
	}

	return (
		<button
			key={option}
			onClick={onClick}
			className={`selection-elements__element ${resultClassName} ${
				active && !showResults ? 'selection-elements__element--active' : ''
			}`}
		>
			<div className='selection-elements__element__option-marker'>
				{indexToAlphabet[index]}
			</div>
			<p className='selection-elements__element__option'>{option}</p>
			{showResults ? <Icon className='selection-elements__element__result-icon' /> : null}
		</button>
	)
}

export default SelectionElement
