import { useEffect, useState } from 'react'
import '../assets/TodoItem.css'
import iconCancel from '../assets/images/icon-cross.svg'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/actions'

export const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  const [cheked, setCheked] = useState(false)

  const handleCheked = () => dispatch(toggleTodo(todo.id))

  useEffect(() => {
    setCheked(todo.completed)
  }, [todo])

  const getStyle = () => {
    return {
      paddingTop: '3px',
      paddingBottom: '15px',
      borderBottom: '2px solid #f2f2f2',
      textDecoration: todo.completed ? 'line-through' : 'none',
    }
  }
  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id))
  }
  return (
    <div style={getStyle()}>
      <div className="todoitemwrapper">
        <label className="container">
          <input type="checkbox" checked={cheked} onClick={handleCheked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="todos">{todo.content}</div>
      <div className="cross" onClick={handleDeleteClick}>
        <img src={iconCancel} alt={iconCancel} />
      </div>
    </div>
  )
}
