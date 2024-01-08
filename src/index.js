import 'Styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import QuizContextProvider from 'Contexts/QuizContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<QuizContextProvider>
			<App />
		</QuizContextProvider>
	</React.StrictMode>
)

reportWebVitals()
