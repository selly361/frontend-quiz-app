import { useQuizContext } from 'Contexts/QuizContextProvider'
import { SubjectIcon, ThemeButton } from 'Components'

function QuizHeader() {
	const { currentQuiz } = useQuizContext()

	return (
		<section className='quiz-header'>
			<div>
				{currentQuiz.title ? <SubjectIcon index={currentQuiz.index} /> : null}
			</div>
			<ThemeButton />
		</section>
	)
}

export default QuizHeader
