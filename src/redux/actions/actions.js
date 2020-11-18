export const addTodo = (title, todoId) => ({
  type: 'ADD_TODO',
  payload: { title, todoId },
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});

export const todoDone = (todoId, isTodoDone) => ({
  type: 'TODO_DONE',
  payload: { todoId, isTodoDone },
});

export const todoImportant = (todoId, isTodoImportant) => ({
  type: 'TODO_IMPORTANT',
  payload: { todoId, isTodoImportant },
});

export const deleteCompletedTodos = () => ({
  type: 'DELETE_COMPLETED_TODOS',
});

export const transferDate = (currentDate) => ({
  type: 'TRANSFER_DATE',
  payload: currentDate,
});
