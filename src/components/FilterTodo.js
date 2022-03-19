import React from 'react'
import '../assets/FilterTodo.css'
import { useDispatch } from 'react-redux'
import { VISIBILITY_FILTER } from '../constants'
import { setFilter } from '../redux/actions'
import { deleteCompletedTodo } from '../redux/actions'

export const FilterTodo = ({ theme, filterTodos }) => {
  const dispatch = useDispatch()

  const handleCompleteDeleteClick = () => {
    dispatch(deleteCompletedTodo())
  }
  const getStyles = () => {
    return {
      color: theme === 'light' ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)',
    }
  }
  const getStyle = () => {
    return {
      backgroundColor:
        theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)',
      display: 'flex',
      position: 'static',
      transition: 'all .5s ease',
      padding: '15px',
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px',
      justifyContent: 'space-between',
    }
  }
  return (
    <>
      <div style={getStyle()}>
        <div>
          <p>{filterTodos.length} items left</p>
        </div>
        <div className="filterActivity" style={getStyles()}>
          {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
            const currentFilter = VISIBILITY_FILTER[filterkey]
            return (
              <p
                key={`${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </p>
            )
          })}
        </div>
        <div>
          <p onClick={handleCompleteDeleteClick}>Clear Completed</p>
        </div>
      </div>
    </>
  )
}
