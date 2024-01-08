import { SunLightIcon, MoonLightIcon } from 'Assets'

export default function ThemeButton(){
    <div className="theme-toggle">
        <SunLightIcon />
        <button className='theme-toggle__circle'>
            <div className='theme-toggle__circle-indicator'></div>
        </button>
        <MoonLightIcon />
    </div>
}