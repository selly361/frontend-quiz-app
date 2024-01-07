import { subjectsData } from 'Constants/subjectsData'
import { useQuizContext } from 'Contexts/QuizContextProvider'

function Subjects() {
	const { startQuiz } = useQuizContext()

	return (
		<div className='subjects'>
			{subjectsData.map((subjectData, i) => (

				<button onClick={() => startQuiz(i)} className='subjects__subject-button'>
					<div className={`subjects__subject-button__icon-container ${subjectData.class}`}>
						<subjectData.Icon />
					</div>
					{subjectData.label}
				</button>
        
			))}
		</div>
	)
}

export default Subjects
