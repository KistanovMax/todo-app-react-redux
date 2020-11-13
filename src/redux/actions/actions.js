export const addTodo = (title, todoId) => ({
  type: 'ADD_TODO',
  payload: { title, todoId },
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});
