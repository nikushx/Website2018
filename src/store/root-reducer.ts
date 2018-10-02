import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { cmdReducer } from './cmd';

const rootReducer = combineReducers({
  router: routerReducer,
  cmd: cmdReducer,
});

export default rootReducer;
