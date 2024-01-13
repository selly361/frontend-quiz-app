import { useEffect, useState } from 'react'

export const useTheme = () => {
	const defaultTheme =
		localStorage.getItem('theme') ||
		(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

	const [theme, setTheme] = useState(defaultTheme)
	let debounceTimeout

	useEffect(() => {
		localStorage.setItem('theme', theme)
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	function toggle() {
		clearTimeout(debounceTimeout)

		debounceTimeout = setTimeout(() => {
			setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
		}, 250)
	}

	return { toggle, theme }
}
