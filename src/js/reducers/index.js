import { combineReducers } from 'redux';

import calculateReducer from './calculateReducer';

const rootReducer = combineReducers({
  calculate: calculateReducer,
});

export default rootReducer;
