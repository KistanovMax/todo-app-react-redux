const initialState = [{ id: 0, title: '', done: false }];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return (state = [
        ...state,
        { id: state.length, title: payload, done: false },
      ]);
    default:
      return state;
  }
};

export default todoReducer;
