import { SubjectIcon } from 'Components'
import { subjectsData } from 'Constants/subjectsData'
import { useQuizContext } from 'Contexts/QuizContextProvider'

function Subjects() {
	const { startQuiz } = useQuizContext()

	return (
		<div className='subjects'>
			{subjectsData.map((subjectData, i) => (
				<button
					key={subjectData.label}
					onClick={() => startQuiz(i)}
					className='subjects__subject-button'
				>
					<SubjectIcon index={i} />
				</button>
			))}
		</div>
	)
}

export default Subjects
