import { ADD_TODO, TOGGLE_TODO, DEL_TODO, DEL_COMPLETED_TODO } from '../actionsTypes';

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [
          ...state.todos,
          { content, completed: false, id }
        ]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
      return { todos }
    }
      
    case DEL_TODO: {
      const { id } = action.payload;
      const todos = state.todos.filter((todo) => todo.id !== id);
      return { todos }
    }
      
    case DEL_COMPLETED_TODO: {
      const todos = state.todos.filter((todo) => todo.completed === false);
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todos;
