import { createContext, useState, useContext } from 'react'
import quizData from 'Constants/quizData'

const QuizContext = createContext({
	resetQuiz: () => {},
	startQuiz: (quizIndex) => {},
	showResults: false,
	quizCompleted: false,
	score: 0,
	selectedOption: '',
	setSelectedOption: () => {},
	isChanging: false,
	submitAnswer: () => {},
	nextQuestion: () => {},
	currentQuiz: {},
	currentQuestion: 0,
	started: false
})

function QuizContextProvider({ children }) {
	const [currentQuiz, setCurrentQuiz] = useState({})
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [score, setScore] = useState(0)
	const [quizCompleted, setQuizCompleted] = useState(false)
	const [selectedOption, setSelectedOption] = useState('')
	const [showResults, setShowResults] = useState(false)
	const [isChanging, setIsChanging] = useState(false)
	const [started, setStarted] = useState(false)

	function submitAnswer() {
		const correctAnswer = currentQuiz.questions[currentQuestion].answer

		if (selectedOption === correctAnswer) {
			setScore(score + 1)
		}

		setShowResults(true)
	}

	function nextQuestion() {
		setIsChanging(true)
		const nextQuestion = currentQuestion + 1

		setTimeout(() => {
		setShowResults(false)

			if (nextQuestion < currentQuiz.questions.length) {
				setCurrentQuestion(nextQuestion)
			} else {
				setQuizCompleted(true)
			}
		}, 500)

        setTimeout(() => {
			setIsChanging(false)
		}, 1000)
	}

	function startQuiz(quizIndex) {
		setIsChanging(true)
		setStarted(true)

		setTimeout(() => {
			setCurrentQuiz(quizData[quizIndex])
			setCurrentQuestion(0)
			setScore(0)
			setQuizCompleted(false)
		}, 500)

        setTimeout(() => {
            setIsChanging(false)
        }, 1000)
	}

	function resetQuiz() {
		setCurrentQuiz({})
		setCurrentQuestion(null)
		setScore(0)
		setQuizCompleted(false)
		setStarted(false)
	}

	return (
		<QuizContext.Provider
			value={{
				resetQuiz,
				startQuiz,
				showResults,
				quizCompleted,
				score,
				selectedOption,
				setSelectedOption,
                isChanging,
                submitAnswer,
                nextQuestion,
                currentQuiz,
                currentQuestion,
				started
			}}
		>
			{children}
		</QuizContext.Provider>
	)
}

export default QuizContextProvider
export const useQuizContext = () => useContext(QuizContext)
