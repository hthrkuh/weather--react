import React, { useState, useEffect } from 'react'
const fav = React.createContext({
  fav: []
})

const FavContextProvider = ({ children }) => {
  const [fav, setWeatherUnit] = useState("")

  const updatefav = fav => {
    setWeatherUnit(fav)
    localStorage.setItem('fav', JSON.stringify(fav))
  }

  useEffect(() => {
    // store preferred temperature unit in localStorage
    if (!localStorage.getItem('fav')) {
      localStorage.setItem('fav', JSON.stringify(fav))
    } else {
      setWeatherUnit(JSON.parse(localStorage.getItem('fav')))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <fav.Provider value={{ fav, updatefav }}>
      {children}
    </fav.Provider>
  )
}

export { fav, FavContextProvider }
