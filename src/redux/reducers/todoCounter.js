const todoCounter = (counter = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TODO_DONE':
      return (counter += payload.isTodoDone ? -1 : +1);
    case 'DELETE_TODO':
      return (counter = 0 ? 0 : counter - 1);
    case 'DELETE_COMPLETED_TODOS':
      return (counter = 0);
    default:
      return counter;
  }
};

export default todoCounter;
