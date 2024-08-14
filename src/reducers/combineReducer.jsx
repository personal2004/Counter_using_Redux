import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  formdata: formReducer,
});

export default rootReducer;
