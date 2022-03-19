import React, { useState } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import TodoWrapper from './components/TodoWrapper'

// set the theme for the light toggle
const LightTheme = {}
const DarkTheme = {}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={themes[theme]}>
      <TodoWrapper theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  )
}
export default App
