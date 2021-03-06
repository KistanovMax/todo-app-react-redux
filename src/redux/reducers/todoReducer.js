const initialState = [];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return (state = [
        ...state,
        {
          id: payload.todoId,
          title: payload.title,
          isDone: false,
          isImportant: false,
        },
      ]);

    case 'DELETE_TODO':
      return (state = [...state.filter((todo) => todo.id !== payload)]);

    case 'TODO_DONE':
      return state
        .map((todo) =>
          todo.id === payload.todoId ? { ...todo, isDone: !payload.isTodoDone } : todo
        )
        .sort((a, b) => a.isDone - b.isDone);

    case 'TODO_IMPORTANT':
      return state.map((todo) =>
        todo.id === payload.todoId
          ? { ...todo, isImportant: !payload.isTodoImportant }
          : todo
      );

    case 'DELETE_COMPLETED_TODOS':
      return state.filter((todo) => todo.isDone === false);

    default:
      return state;
  }
};

export default todoReducer;
