import { combineReducers } from 'redux';
import automaten from './automaten/reducers';
import aanbiedingen from './aanbiedingen/reducers';

const rootReducer = combineReducers({
  automaten,
  aanbiedingen,
});

export default rootReducer;
