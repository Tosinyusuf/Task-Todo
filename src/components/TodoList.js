import { useSelector } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selector'
import { Todo } from './Todo'
import { FilterTodo } from './FilterTodo'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'

export const TodoList = ({ theme }) => {
  const { todos, visibilityFilter } = useSelector((state) => state)
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter)

  const getStyle = () => {
    return {
      backgroundColor:
        theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)',
      color: theme === 'light' ? 'black' : 'white',
      borderRadius: '6px',
      zindex: '3',
    }
  }
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              style={getStyle()}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filterTodos.length ? (
                filterTodos.map((todo, index) => (
                  <Draggable
                    key={`todo-${todo.id}`}
                    draggableId={todo.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Todo todo={todo} />
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <div className="errormsg">No Todos!</div>
              )}
              {provided.placeholder}
              <FilterTodo theme={theme} filterTodos={filterTodos} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}
