import React from 'react'
import bgDesktop from '../assets/images/bg-desktop-dark.jpg'
import bgMobile from '../assets/images/bg-mobile-dark.jpg'
import iconMoon from '../assets/images/icon-moon.svg'
import iconSun from '../assets/images/icon-sun.svg'
import TodoBody from './TodoBody'

const TodoWrapper = ({ theme, setTheme }) => {
  const width = window.innerWidth

  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const icon =
    theme === 'light' ? (
      <img src={iconMoon} alt={iconMoon} />
    ) : (
      <img src={iconSun} alt={iconMoon} />
    )

  const getStyle = () => {
    return {
      backgroundColor: theme === 'light' ? 'white' : 'black',
      height: '100vh',
      position: 'static',
      transition: 'all .5s ease',
      boxShadow: '2px 4px #e7e8ed',
    }
  }
  return (
    <div style={getStyle()}>
      <div className='imageMobile'> <img src={bgMobile} alt={bgMobile} /></div>
      <div className="image">
      <img src={bgDesktop} alt={bgDesktop} />
      </div>
      <div className="bodyWrapper">
        <div className="body">
          <TodoBody
            theme={theme}
            setTheme={setTheme}
            changeTheme={changeTheme}
            icon={icon}
          />
        </div>
        <p className="drag">Drag and drop to reorder list</p>
      </div>
    </div>
  )
}

export default TodoWrapper
