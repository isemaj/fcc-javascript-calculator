import { NUMBER_INPUT, OPERATOR_INPUT } from '../constants/ActionTypes';

const previousState = {
  status: '',
};

const calculateReducer = (state = previousState, action) => {
  switch (action.type) {
    case NUMBER_INPUT:
      return {
        ...state,
        status: action.payload,
      };
    case OPERATOR_INPUT:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default calculateReducer;
