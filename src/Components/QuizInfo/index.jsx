import { Intro, ProgressBar } from 'Components'
import { useQuizContext } from 'Contexts/QuizContextProvider'

function QuizInfo() {
	const { started, currentQuiz, currentQuestion, isChanging, quizCompleted } =
		useQuizContext()

	if (!started) {
		return <Intro />
	}

	return (
		<div className={`quiz-info ${isChanging ? 'quiz-info--animation' : ''}`}>
			{started && !quizCompleted ? (
				<>
					<p className='quiz-info__body'>Question {currentQuestion + 1} of 10</p>
					<h3 className='quiz-info__question'>
						{currentQuiz.questions[currentQuestion].question}
					</h3>
					<ProgressBar />
				</>
			) : null}

			{quizCompleted ? (
				<>
					<h2 className='intro__head'>Quiz completed</h2>
					<h2 className='intro__head--bold'>You scored...</h2>
				</>
			) : null}
		</div>
	)
}

export default QuizInfo
