import { createContext, useState, useContext, useRef, useEffect } from 'react'
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
	started: false,
	errror: false
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
	const [error, setError] = useState(false)
	const isTransitionend = useRef(true)

	function submitAnswer() {
		if(!selectedOption) {
			setError(true)
			return
		}

		if(!isTransitionend.current) return

		const correctAnswer = currentQuiz.questions[currentQuestion].answer

		if (selectedOption === correctAnswer) {
			setScore(score + 1)
		}

		setShowResults(true)
		setSelectedOption('')
	}

	function nextQuestion() {
		if(!isTransitionend.current) return

		setIsChanging(true)
		isTransitionend.current = false
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
			isTransitionend.current = true
		}, 1000)
	}

	function startQuiz(quizIndex) {
		setIsChanging(true)
		setCurrentQuiz(quizData[quizIndex])
		isTransitionend.current = false

		setTimeout(() => {
			setStarted(true)
			setCurrentQuestion(0)
			setScore(0)
			setQuizCompleted(false)
		}, 500)

        setTimeout(() => {
            setIsChanging(false)
			isTransitionend.current = true
        }, 1000)
	}

	function resetQuiz() {
		setCurrentQuiz({})
		setCurrentQuestion(null)
		setScore(0)
		setQuizCompleted(false)
		setStarted(false)
	}


	useEffect(() => {
		if(selectedOption) setError(false)
	}, [selectedOption])

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
				started,
				error
			}}
		>
			{children}
		</QuizContext.Provider>
	)
}

export default QuizContextProvider
export const useQuizContext = () => useContext(QuizContext)
