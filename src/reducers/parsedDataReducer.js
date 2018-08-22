import { PARSED_DATA } from '../actions/types';

const INITIAL_STATE = {
  parsed_data: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PARSED_DATA:
    return { ...state, parsed_data: action.payload };
  default:
    return state;
  }
};
