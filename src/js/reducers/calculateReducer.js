import {
  NUMBER_INPUT,
  OPERATOR_INPUT,
  SOLVE,
  INITIALIZE,
  DECIMAL_INPUT,
  CE,
  CHANGE_SIGN,
} from '../constants/ActionTypes';

const previousState = {
  lastInput: '0',
  formula: '',
  result: '0',
  lastType: 'number',
  sign: true,
  splitted: '0',
  testSplit: 0,
};

const operatorRegx = /[+\-\/*]/;
const matchOperator = /(?<!\()[+\-\/*]/g; // match all math operator except those preceded by opening parenthesis 
const handleSign = (formula, sign, payload) => {
  if (payload === 'CHANGE') {
    if (/\((?!.*\))/g.test(formula) || formula[formula.length - 1] === ')') {
      return true;
    } 
    return false;
  } 
  return true;
};

const handleFormula = (formula) => {
  if (/\(-$/g.test(formula)) {
    if (/[+\-\/*]\(-$/g.test(formula)) {
      return Math.round(window.eval(formula.replace(/[+\-\/*]\(-$/g, '')) * 10000 ) / 10000; 
    }
    return Math.round(window.eval(formula.replace(/\(-$/g, '')) * 10000 ) / 10000;
  }
  if (/((?<!\()[+\-\/*])$/g.test(formula)){
    return Math.round(window.eval(formula.replace(/((?<!\()[+\-\/*])$/g, '')) * 10000 ) / 10000; 
  }
  return Math.round(window.eval(formula) * 10000 ) / 10000;
};

const createFormula = (lastInput, prevFormula, payload, lastType, sign) => {
  const splittedFormula = prevFormula.split(matchOperator);
  const lastIndex = splittedFormula[splittedFormula.length - 1];
  console.log('lastIndex ' + lastIndex);
  if (payload === '.') {
    if (/^[0]+(?=\d+\.?\d*)/g.test(lastIndex)) {
      return prevFormula.replace(/^[0]+(?=\d+\.?\d*)/g, '').concat(payload);
    }
    if (lastInput === '.' || lastIndex.indexOf('.') !== -1) {
      return prevFormula;
    }
    return prevFormula.concat(payload);
  } 

  if (operatorRegx.test(payload)) {
    if (/^[0]+(?=\d+\.?\d*)/g.test(lastIndex)) {
      return prevFormula.replace(/^[0]+(?=\d+\.?\d*)/g, '').concat(payload);
    }
    if (prevFormula.length === 0) {
      return prevFormula;
    } if (operatorRegx.test(prevFormula[prevFormula.length - 1])) {  // if previous char is an operator
      return prevFormula.replace(/[+\-*/](?!.*[+\-*/])/g, payload);       // replace by new opeartor
    } if (/[(](?!.*[)])/.test(prevFormula) && !/[)]/.test(prevFormula[prevFormula.length - 1])) { // if the first occurrence of ( is not followed by ) and the last char in the formula is not )
      return prevFormula.concat(')' + payload); // then append with ) along with the new operator
    }
    return prevFormula.concat(payload);
  }
  if (payload === 'CHANGE') {
    if (sign) {
      if (prevFormula.length === 0) {
        return prevFormula.concat('(-');  
      }
      if (prevFormula.indexOf(lastIndex) === 0 && !operatorRegx.test(prevFormula)) {
        return '(-' + lastIndex + ')';
      }
      if (prevFormula.match(matchOperator) && !matchOperator.test(prevFormula[prevFormula.length - 1])) {
        return prevFormula.slice(0, prevFormula.lastIndexOf(lastIndex)) + '(-' + lastIndex + ')' 
      }
      if (operatorRegx.test(prevFormula[prevFormula.length - 1])) {
        return prevFormula.concat('(-');
      }
    }
    if (!sign) {
      if (prevFormula.length === 2 && /\(-$/g.test(prevFormula)) {
        return '';
      }
      if (!prevFormula.match(matchOperator)) { 
        return lastIndex.match(/\d*\.?\d*/g)[2].toString(); // match any numbers or decimal numbers
      } 
      if (prevFormula[prevFormula.length - 1] === ')' && matchOperator.test(prevFormula)) {
        return prevFormula.replace(/(\(-)(?!.*\()/g, '').replace(/\)$/g, '').toString() ;
      }
      if (/\(-$/g.test(prevFormula) && matchOperator.test(prevFormula)) {
        return prevFormula.replace(/\(-$/g, '');
      }
    }
    return prevFormula.concat(payload);
  }
    return prevFormula.concat(payload);
};


const calculateReducer = (state = previousState, action) => {
  switch (action.type) {
    case DECIMAL_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        lastType: 'decimal',
        formula: createFormula(state.lastInput, state.formula, action.payload, null, null),
        sign: handleSign(state.formula),
      };
    case NUMBER_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        lastType: 'number',
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType, state.sign),
        sign: handleSign(state.formula, null, action.payload),
      };
    case OPERATOR_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        lastType: 'operator',
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType, state.sign),
      };
    case CHANGE_SIGN:
      return {
        ...state,
        sign: handleSign(state.formula, state.sign, action.payload),
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType, state.sign),
      };
    case INITIALIZE:
      return {
        ...state,
        lastInput: '0',
        formula: '',
        result: '0',
      };
    case CE:
      return {
        ...state,
        formula: state.formula.slice(0, state.formula.length - 1),
      };
    case SOLVE:
      return {
        ...state,
        result: handleFormula(state.formula),
      };
    default:
      return state;
  }
};

export default calculateReducer;
