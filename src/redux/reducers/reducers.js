import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import dateReducer from './dateReducer';

const reducers = combineReducers({
  todoReducer,
  dateReducer,
});

export default reducers;
