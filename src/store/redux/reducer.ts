import {combineReducers} from 'redux';

import auth from '../auth/AuthReducers';

const Foodbook = combineReducers({
  auth,
});

export default Foodbook;
