import { combineReducers } from 'redux';
import user from './user/reducers';
import automaten from './automaten/reducers';
import aanbiedingen from './aanbiedingen/reducers';

const rootReducer = combineReducers({
  user,
  automaten,
  aanbiedingen,
});

export default rootReducer;
