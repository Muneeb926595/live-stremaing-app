import { combineReducers } from 'redux';

import Foodbook from '../redux/reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    Foodbook,
    ...asyncReducers,
  });

export default createReducer;
