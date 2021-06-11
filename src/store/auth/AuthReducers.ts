import {AuthActionTypes} from './../redux/actionTypes';
import {AuthState} from '../redux/state';

const INITIAL_STATE: AuthState = {
  user: {},
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: AuthState = INITIAL_STATE,
  action: Action,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.REGISTER_USER_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.REGISTER_USER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.LOGIN_USER_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case AuthActionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default AuthReducer;
