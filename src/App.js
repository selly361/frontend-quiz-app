import { QuizHeader, QuizInfo, InteractiveQuizSection } from 'Components'

function App() {
	return (
		<main className='main'>
			<QuizHeader />
			<section className='main__main-section'>
				<div className='main__main-section__information-container'>
					<QuizInfo />
				</div>
				<InteractiveQuizSection />
			</section>
		</main>
	)
}

export default App
