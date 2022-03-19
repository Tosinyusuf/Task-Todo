import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

export const AddTodo = ({ theme }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  //submit todos

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(addTodo(value))
      setValue('')
    }
  }
  //handle inputs
  const handleInput = (e) => {
    setValue(e.target.value)
  }
  const getStyle = () => {
    return {
      backgroundColor:
        theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)',
      width: '100%',
      marginBottom: '16px',
      padding: '15px',
      color: theme === 'light' ? 'black' : 'white',
      border: 'none',
      borderRadius: '6px',
      transition: 'all .5s ease',
    }
  }
  return (
    <form>
      <input
        type="text"
        onKeyDown={onKeyDown}
        style={getStyle()}
        placeholder="create a new todo..."
        value={value}
        onChange={handleInput}
      ></input>
    </form>
  )
}
