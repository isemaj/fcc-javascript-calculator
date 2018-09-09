import { combineReducers } from 'redux';

import calculateReducer from './calculateReducer';

const rootReducer = combineReducers({
  test: calculateReducer,
});

export default rootReducer;
