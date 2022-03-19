import React from 'react'
import '../assets/TodoBody.css'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'
import { VisibilityFilter } from './VisibilityFilter'

const TodoBody = ({ changeTheme, icon, theme, setTheme }) => {
  return (
    <div>
      <div className="header">
        <h2>TODO</h2>
        <div onClick={changeTheme}>{icon}</div>
      </div>
      <AddTodo theme={theme} />
      <TodoList theme={theme} setTheme={setTheme} />
      <VisibilityFilter theme={theme} />
    </div>
  )
}

export default TodoBody
