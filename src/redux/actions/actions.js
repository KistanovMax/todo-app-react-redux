export const addTodo = (title, todoId) => ({
  type: 'ADD_TODO',
  payload: { title, todoId },
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});

export const transferDate = (currentDate) => ({
  type: 'TRANSFER_DATE',
  payload: currentDate,
});
