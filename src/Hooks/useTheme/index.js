import { useEffect, useState } from 'react'

export const useTheme = () => {
	const defaultTheme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

	const [theme, setTheme] = useState(defaultTheme)

	useEffect(() => {
		localStorage.setItem('theme', theme)

		document.documentElement.setAttribute('data-theme', theme)

	}, [theme])

	function toggle() {
		setTheme((e) => (e == 'dark' ? 'light' : 'dark'))
	}

	return {toggle, theme}
}

