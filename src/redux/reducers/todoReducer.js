const initialState = [{ id: 0, title: '' }];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return (state = [...state, { id: state.length, title: payload }]);
    case 'DELETE_TODO':
      return (state = [...state.filter((todo) => todo.id !== payload)]);
    default:
      return state;
  }
};

export default todoReducer;
