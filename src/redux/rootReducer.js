import { combineReducers } from 'redux';
import automaten from './automaten/reducers';
import aanbiedingen from './aanbiedingen/reducers';
import items from './items/reducers';

const rootReducer = combineReducers({
  automaten,
  aanbiedingen,
  items,
});

export default rootReducer;
