import { SunLightIcon, MoonLightIcon } from 'Assets'
import { useTheme } from 'Hooks/useTheme'

function ThemeButton() {

    const { toggle, theme } = useTheme() //useTheme is a custom hook that was created in the hooks folder, theme shows whether its light or dark theme and toggle switches the theme


    const className = `theme-toggle__circle-indicator--${theme}`

    return (
        <div className='theme-toggle'>
            <SunLightIcon className='theme-toggle__icon' />
            <button onClick={toggle} className='theme-toggle__circle'>
                <div className={`theme-toggle__circle-indicator ${className}`}></div>
            </button>
            <MoonLightIcon className='theme-toggle__icon' />
        </div>
    )
}

export default ThemeButton