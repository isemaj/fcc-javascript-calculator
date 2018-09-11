import * as types from '../constants/ActionTypes';

export const selectNumber = arg => ({
  type: types.NUMBER_INPUT,
  payload: arg.value,
});

export const selectOperator = arg => ({
  type: types.OPERATOR_INPUT,
  payload: arg.value,
});

export const solverOperator = () => ({
  type: types.SOLVE,
});

export const initialize = () => ({
  type: types.INITIALIZE,
});

export const addDecimal = arg => ({
  type: types.DECIMAL_INPUT,
  payload: arg.value,
});

export const clearEntry = () => ({
  type: types.CE,
});

export const changeSign = () => ({
  type: types.CHANGE_SIGN,
});
