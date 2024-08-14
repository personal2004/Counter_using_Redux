import { combineReducers } from 'redux';
import ApiReducer from './apiReducer';

const rootReducer = combineReducers({
  user: ApiReducer,
});

export default rootReducer;
