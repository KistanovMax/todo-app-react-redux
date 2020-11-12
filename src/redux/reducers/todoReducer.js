const initialState = { id: 0, text: '', done: false }

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TODO':
      return (state = {
        ...state,
        payload,
      })

    default:
      return state
  }
}

export default todoReducer
