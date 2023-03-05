import React from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function Switcher() {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <>
            {theme === 'dark' ? (
                <input type="checkbox"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="toggle toggle-primary dark:toggle-secondary"
                    checked />
            ) : (
                <input type="checkbox"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="toggle toggle-primary dark:toggle-secondary"
                    onChange={() => setChecked(false)}/>
            )}
        </>
    )
}