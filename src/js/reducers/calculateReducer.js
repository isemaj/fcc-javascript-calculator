import {
  NUMBER_INPUT,
  OPERATOR_INPUT,
  SOLVE,
  INITIALIZE,
  DECIMAL_INPUT,
  CE,
} from '../constants/ActionTypes';

const previousState = {
  lastInput: '0',
  formula: '',
  result: '',
  lastType: 'number',
  splitted: '0',
  testSplit: 0,
};

const testnew = () => {
  return '6+6';
}; 

const calculateReducer = (state = previousState, action) => {
  switch (action.type) {
    case NUMBER_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        formula: state.formula.concat(action.payload),
        lastType: 'number',
      };

    case OPERATOR_INPUT: {
      const a = testnew();
      return {
        ...state,
        lastInput: action.payload,
        formula:  a,
        lastType: 'operator',
      };
    }
    case INITIALIZE:
      return {
        ...state,
        lastInput: '0',
        formula: '',
        result: '0',
        splitted: '0',
        testSplit: 0,
      };
    case DECIMAL_INPUT: {
      return {
        ...state,
        lastInput: action.payload,
        formula: state.formula.concat(action.payload),
      };
    }
    case CE:
      return {
        ...state,
        formula: state.formula.slice(0, state.formula.length - 1),
      };
    case SOLVE: {
      return {
        ...state,
        result: window.eval(state.formula),
      };
    }
    default:
      return state;
  }
};

export default calculateReducer;
