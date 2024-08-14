import { combineReducers } from 'redux';
import todoReducer from './todoReducers';
import counterReducer from './counterReducer';
import todoListReducer from './todoReducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  todoList: todoListReducer

});

export default rootReducer;
