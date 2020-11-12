import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const reducers = combineReducers({
  Todo: todoReducer,
})

export default reducers
