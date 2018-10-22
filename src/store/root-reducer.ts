import { combineReducers } from 'redux';

import { cmdReducer } from './cmd';

const rootReducer = combineReducers({
  cmd: cmdReducer,
});

export default rootReducer;
