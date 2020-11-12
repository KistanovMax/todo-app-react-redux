export const addTodo = (title) => ({
  type: 'ADD_TODO',
  payload: title,
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});
