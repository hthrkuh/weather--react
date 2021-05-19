import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => { }
})


const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('')
  const colorTheme = theme === 'light' ? 'dark' : 'light'

  const toggleTheme = () => {
    const selectedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(selectedTheme)
    saveThemePreference(selectedTheme)
  }

  const saveThemePreference = theme => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }


  useEffect(() => {
    // set theme based on the time on initial application load and
    // when there is no theme preference in the localStorage

    const daynightChecker = () => {
      const hour = moment().format('H')
      if (hour >= 6 && hour < 18) {
        setTheme('light')
        saveThemePreference('light')
      } else {
        setTheme('dark')
        saveThemePreference('dark')
      }
    }

    if (!localStorage.getItem('theme')) {
      daynightChecker()
    } else {
      setTheme(JSON.parse(localStorage.getItem('theme')))
    }
  }, [])


  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
