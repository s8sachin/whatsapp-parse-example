import { combineReducers } from 'redux';
import parsedDataReducer from './parsedDataReducer';

export default combineReducers({
  parsedData: parsedDataReducer,
});
