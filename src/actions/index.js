import { types } from './actionTypes';

export const loginRequest = (payload) => ({
  type: types.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: types.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: types.registerRequest,
  payload,
});

