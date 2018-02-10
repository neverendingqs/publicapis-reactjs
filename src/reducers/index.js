import { combineReducers } from 'redux';

import rawData from './rawData';
import searchTerm from './searchTerm';

const rootReducer = combineReducers({
  rawData,
  searchTerm
});
export default rootReducer;
