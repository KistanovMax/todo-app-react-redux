import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import dateReducer from './dateReducer';
import todoCounter from './todoCounter';

const reducers = combineReducers({
  todoReducer,
  dateReducer,
  todoCounter,
});

export default reducers;
