import { useDispatch } from 'react-redux'
import { VISIBILITY_FILTER } from '../constants'
import { setFilter } from '../redux/actions'

export const VisibilityFilter = ({ theme }) => {
  const dispatch = useDispatch()

  const getStyle = () => {
    return {
      backgroundColor:
        theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)',
      display: 'flex',
      justifyContent: 'space-around',
      color: theme === 'light' ? 'black' : 'white',
      transition: 'all .5s ease',
      borderRadius: '6px',
      marginTop: '20px',
      padding: '15px',
    }
  }
  return (
    <div style={getStyle()} className="visibileFilters">
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
  )
}
