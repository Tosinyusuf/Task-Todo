import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DEL_TODO, DEL_COMPLETED_TODO } from './actionsTypes';

let nextTodoId = 0;
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
export const deleteTodo = id => ({
  type: DEL_TODO,
  payload: { id }
});
export const deleteCompletedTodo = () => ({
  type: DEL_COMPLETED_TODO,
  payload: { }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

