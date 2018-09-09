import * as types from '../constants/ActionTypes';

export const selectNumber = arg => ({
  type: types.NUMBER_INPUT,
  payload: arg.value,
});

export const selectOperator = arg => ({
  type: types.OPERATOR_INPUT,
  payload: arg.value,
});
