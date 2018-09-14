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
  result: '',
  lastType: 'number',
  sign: true,
  splitted: '0',
  testSplit: 0,
};

const operatorRegx = /[+\-/*]/;


const handleSign = (formula, sign, payload) => {
  const lastSignMatch = formula.match(/([+\-*/](?!.*[+\-*/]))/g);
  if (payload === 'CHANGE') {
    if (formula[formula.length - 1] !== ')') {
      return false;
    } else {
      return true;
    }
  } else {
    if (/[-]/.test(lastSignMatch)) {
      return false;
    }
    return true; 
  }
}

const createFormula = (lastInput, prevFormula, payload, lastType, sign) => {
  const splittedFormula = prevFormula.split(operatorRegx);
  const lastIndex = splittedFormula[splittedFormula.length - 1];
  // console.log(prevFormula);
  // console.log(splittedFormula);
  // console.log('lastIndex ' + lastIndex);
  // console.log(prevFormula.indexOf(lastIndex));
  // console.log(prevFormula[prevFormula.indexOf(lastIndex) - 1]);
  if (payload === '.') {
    if (lastInput === '.' || lastIndex.indexOf('.') !== -1) {
      return prevFormula;
    }
    return prevFormula.concat(payload);
  } 

  else if (operatorRegx.test(payload)) {
    if (prevFormula.length === 0) {
      return prevFormula;
    } else if (operatorRegx.test(prevFormula[prevFormula.length - 1])) {  // if previous char is an operator
      return prevFormula.replace(/[+\-*/](?!.*[+\-*/])/g, payload);       // replace by new opeartor
    } else if (/[(](?!.*[)])/.test(prevFormula) && !/[)]/.test(prevFormula[prevFormula.length - 1])) { // if the first occurrence of ( is not followed by ) and the last char in the formula is not )
      return prevFormula.concat(')' + payload); // then append with ) along with the new operator
    }
    return prevFormula.concat(payload);
  }



/////////////////

  else if (payload === 'CHANGE') {
    console.log('POSNEG ENTER');
    if (prevFormula.length === 0) {
      console.log('FIRST IF BLOCK');
      return prevFormula.concat('(-');  
    } 
    else if (prevFormula.length === 2 && prevFormula.indexOf('(-') !== -1) {
      console.log('SECOND ELSE IF BLOCK');
      return '';
    }

    else if (prevFormula.indexOf(lastIndex) === 0 && !operatorRegx.test(prevFormula)) {
      console.log('THIRD ELSE IF BLOCK');
      return '(-' + lastIndex + ')';
    }

    else if (operatorRegx.test(prevFormula[prevFormula.indexOf(lastIndex) - 1])) {
      console.log('FOURTH ELSE IF BLOCK');
      // return prevFormula.slice(0, prevFormula.lastIndexOf(lastIndex) - 1).concat(prevFormula[prevFormula.lastIndexOf(lastIndex) - 1] + '(-' + lastIndex + ')');
      return prevFormula.slice(0, prevFormula.indexOf(lastIndex) - 1).concat(prevFormula[prevFormula.lastIndexOf(lastIndex) - 1] + '(-' + lastIndex + ')');
    }

    else {
      console.log('CHANGE ELSE BLOCK')
      return prevFormula.concat(payload); 
    }
    return prevFormula.concat(payload);
  }

/////////////////


  else {
      console.log('Else Block');
    return prevFormula.concat(payload);
  }

};


const calculateReducer = (state = previousState, action) => {
  switch (action.type) {
    case DECIMAL_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        lastType: 'decimal',
        formula: createFormula(state.lastInput, state.formula, action.payload),
        sign: handleSign(state.formula),
      };
    case NUMBER_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        lastType: 'number',
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType),
        sign: handleSign(state.formula),
      };
    case OPERATOR_INPUT:
      return {
        ...state,
        lastInput: action.payload,
        lastType: 'operator',
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType),
      };
    case CHANGE_SIGN:
      return {
        ...state,
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType),
        sign: handleSign(state.formula, state.sign, action.payload),
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
        result: state.lastType === 'operator' ? window.eval(state.formula.slice(0, state.formula.length - 1)) : window.eval(state.formula),
      };
    default:
      return state;
  }
};

export default calculateReducer;
