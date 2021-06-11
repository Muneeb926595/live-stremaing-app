import {User} from 'models';

declare global {
  interface AuthState {
    user: User;
    loading?: boolean;
  }
}
export {AuthState};
