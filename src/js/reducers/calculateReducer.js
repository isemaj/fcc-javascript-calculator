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
  result: '0',
  lastType: '',
  splitted: '0',
};


const calculateReducer = (state = previousState, action) => {
  // let test = '';
  switch (action.type) {
    case NUMBER_INPUT:
    //   if (action.payload === '0') {
    //     console.log('0 action.payload');
    //     if (state.splitted.length === 1 && state.splitted[state.splitted.length - 1] === 0) {
    //       test = state.formula;
    //     }
    //   } else {
    //     test = state.formula.concat(action.payload);
    //   }

    //   // console.log('splitted ');
    //   // console.log(state.splitted);
    //   // console.log('length ');
    //   // console.log(state.splitted.length);
    //   // console.log('second to the last ');
    //   // console.log(state.splitted[state.splitted.length-1]);
      return {
        ...state,
        lastInput: action.payload,
        formula: state.formula.concat(action.payload),
        // formula: test,
        lastType: 'number',
        splitted: state.formula.split(/[-+*/]/g),
      };
    case OPERATOR_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        formula: state.lastType === 'operator' ? (action.payload === state.lastInput ? state.formula : state.formula.slice(0, state.formula.length-1).concat(action.payload)) : (state.formula.concat(action.payload)),
        lastType: 'operator',
        splitted: state.formula.split(/[-+*/]/g),
      };
    case SOLVE: {
      // console.log(state.formula.length); 
      // if(state.formula.length === '0' && state.lastInput === '.' ) {
      //   result: window.eval(0.0)
      // }

      return {
        ...state,
        result: window.eval(state.formula),
      };
    }
    case INITIALIZE:
      return {
        ...state,
        lastInput: '0',
        formula: '',
        result: '0',
        splitted: '0',
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
    default:
      return state;
  }
};

export default calculateReducer;
