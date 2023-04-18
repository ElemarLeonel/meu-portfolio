import React from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function Switcher() {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <>
            {theme === 'dark' ? (
                    <input type="checkbox"
                        aria-label="Dark Theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="toggle toggle-secondary"
                        checked/>
            ) : (
                    <input type="checkbox-light"
                        aria-label="Light Theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="toggle toggle-secondary"
                        onChange={() => setChecked(false)}/>
            )}
        </>
    )
}