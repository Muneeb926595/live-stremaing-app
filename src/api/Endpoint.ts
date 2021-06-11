export const BASE = 'api end point';

export const getRegisterUrl = () => {
  return encodeURI("auth/register");
};

export const loginUserUrl = () => {
  return encodeURI("auth/login");
};