import React, { useContext } from 'react'
import Toggle from 'react-toggle'
import { ThemeContext } from '../context/ThemeContext'
import IconComponent from './IconComponent'
import { isEmpty } from 'lodash-es'

const HeaderComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className='flex justify-between items-center px-5 py-5'>

      <div>
        {/* below condition to avoid toggle glitch effect on page refresh */}
        {!isEmpty(theme) ? (
          <Toggle
            checked={theme === 'light'}
            icons={{
              checked: <IconComponent iconType={'light'} />,
              unchecked: <IconComponent iconType={'dark'} />,
            }}
            onChange={toggleTheme}
          />
        ) : null}
      </div>
    </div>
  )
}

export default HeaderComponent
