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
const matchOperator = /(?<!\()[+\-\/*]/g; // match all math operator except those inside the parenthesis

const handleSign = (formula, sign, payload) => {
  // console.log('PAYLOAD ' + payload);
  // const lastSignMatch = formula.match(/([()](?!.*[)]))/g);
  const lastSignMatch = formula.match(matchOperator);
  // console.log('lastSignMatch ' + lastSignMatch);
  if (payload === 'CHANGE') {
  // console.log('CHANGE ENTERED');
    if (formula[formula.length - 1] !== ')') {
      // console.log('LAST CHAR IN FORMULA IS )');
      return false;
    } else {
      // console.log('LAST CHAR IN FORMULA IS NOT )');
      return true;
    }
  } else {
    // console.log('NOT CHANGE ENTERED');
    if (/[-]/.test(lastSignMatch)) {
      // console.log('>> TEST MATCHED FOR NEGATIVE AS LAST SIGN');
      return false;
    }
    // console.log('>> TEST NOT MATCHED FOR NEGATIVE AS LAST SIGN')
    return true; 
  }
}

const createFormula = (lastInput, prevFormula, payload, lastType, sign) => {
  const splittedFormula = prevFormula.split(matchOperator);
  const lastIndex = splittedFormula[splittedFormula.length - 1];
  // console.log('SIGN ' + sign);
  // console.log('prevFormula ' + prevFormula);
  // console.log('lastIndex ' + lastIndex);
  // console.log(lastIndex.match(/\d+(\.\d+)?/g));
  // console.log('prevFormula.length ' + prevFormula.length);
  // console.log('lastIndex.length ' + lastIndex.length);
  // console.log('splittedFormula ' + splittedFormula);
  // console.log(prevFormula.indexOf(lastIndex));
  // console.log(prevFormula[prevFormula.indexOf(lastIndex) - 1]);
  if (payload === '.') {
    if (lastInput === '.' || lastIndex.indexOf('.') !== -1) {
      return prevFormula;
    }
    return prevFormula.concat(payload);
  } 

  if (operatorRegx.test(payload)) {
    if (prevFormula.length === 0) {
      return prevFormula;
    } if (operatorRegx.test(prevFormula[prevFormula.length - 1])) {  // if previous char is an operator
      return prevFormula.replace(/[+\-*/](?!.*[+\-*/])/g, payload);       // replace by new opeartor
    } if (/[(](?!.*[)])/.test(prevFormula) && !/[)]/.test(prevFormula[prevFormula.length - 1])) { // if the first occurrence of ( is not followed by ) and the last char in the formula is not )
      return prevFormula.concat(')' + payload); // then append with ) along with the new operator
    }
    return prevFormula.concat(payload);
  }

//       INIT        IF TRUE (pos)   IF FALSE (neg)
// 1.                (-              
// 2.    258         (-258)          258
// 3.    256-256     256-(-256)      256-256 
// 4.    258-        258-(-          258-


/////////////////

  else if (payload === 'CHANGE') {
    // console.log('POSNEG ENTER');
    // 1. 
    if (prevFormula.length === 0) {
      // console.log('FIRST IF BLOCK');
      return prevFormula.concat('(-');  
    }
    if (prevFormula.length === 2 && prevFormula.indexOf('(-') !== -1) {
      // console.log('SECOND ELSE IF BLOCK');
      return '';
    }
    // 1.

    // 2.
    if (prevFormula.indexOf(lastIndex) === 0 && !operatorRegx.test(prevFormula)) {
      // console.log('THIRD ELSE IF BLOCK');
      return '(-' + lastIndex + ')';
    }
    if (!prevFormula.match(matchOperator)) { 
      // console.log('FOURTH ELSE IF BLOCK');
      return lastIndex.match(/\d+(\.\d+)?/g).toString(); // match any numbers or decimal numbers
    } 
    //2.

    // if (operatorRegx.test(prevFormula[prevFormula.indexOf(lastIndex) - 1])) {
      // console.log('UNKNOWN ELSE IF BLOCK');
    //   // return prevFormula.slice(0, prevFormula.lastIndexOf(lastIndex) - 1).concat(prevFormula[prevFormula.lastIndexOf(lastIndex) - 1] + '(-' + lastIndex + ')');
    //   return prevFormula.slice(0, prevFormula.indexOf(lastIndex) - 1).concat(prevFormula[prevFormula.lastIndexOf(lastIndex) - 1] + '(-' + lastIndex + ')');
    // }
    // console.log('DEFAULT');
    return prevFormula.concat(payload);
  }

/////////////////


  else {
      // console.log('Else Block');
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
        formula: createFormula(state.lastInput, state.formula, action.payload, state.lastType, state.sign),
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
