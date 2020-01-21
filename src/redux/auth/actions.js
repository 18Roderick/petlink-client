import authTypes from './types';

export const authenticate = dto => {};

export const authStart = () => ({
	type: authTypes.AUTH_START,
});

export const authSuccess = token => ({
	type: authTypes.AUTH_SUCCESS,
	payload: token,
});

export const authFailed = error => ({
	type: authTypes.AUTH_FAILED,
	payload: error,
});
