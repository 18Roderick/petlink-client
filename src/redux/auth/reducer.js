import authTypes from './types';

const INITIAL_STATE = {
	isAuth: false,
	isSigning: true,
	token: {
		refreshToken: '',
		currentToken: '',
		exp: '',
	},
	errorMessageAuthFailed: '',
	errorMessageRefreshTokenFailed: '',
};

export default (currenState = INITIAL_STATE, action) => {
	switch (action.type) {
		case authTypes.AUTH_START:
			return {
				...currenState,
				isSigning: true,
			};

		case authTypes.AUTH_SUCCESS:
			return {
				...currenState,
				isSigning: false,
				token: action.payload,
			};

		case authTypes.AUTH_FAILED:
			return {
				...currenState,
				isSigning: false,
				errorMessageAuthFailed: action.payload,
			};

		default:
			return currenState;
	}
};
