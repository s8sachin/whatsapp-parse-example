import { PARSED_DATA } from './types';
import parseDataFromString from '../utils/parseDataFromString';

export const parseDataAction = fileContent => (
  (dispatch) => {
    parseDataFromString(fileContent)
    .then(messages => {
      dispatch({ type: PARSED_DATA, payload: messages });
    })
    .catch(e => console.log(e));
  }
);
