const initialState = {};

const dateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TRANSFER_DATE':
      return (state = { ...state, date: payload });
    default:
      return state;
  }
};

export default dateReducer;
