import eventStatuses from "../../_config/eventStatuses";

import fetchLogin from "./services/LoginService";
import fetchRegister from "./services/RegisterService";

import * as Auth from "../authFunctions";

const {
    REGISTRATION_SUCCESFULL,
    REGISTRATION_ERROR,
    REGISTRATION_FAILED,
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL
} = eventStatuses.auth;

// pass validation will be added later (regEx, etc)

export const getNewRefreshToken = () => {
    return (dispatch, getState) => {
        new Promise(resolve => {
            return Auth.postRefreshToken(Auth.getRefreshToken()).then(async response => {
                await dispatch(authorize(response.data));
                return resolve();
            });
        });
    }
}

export const refreshToken = async (state) => {
    return async (dispatch, getState) => {
        await dispatch(clearTimeoutToken());
        const renewalTimeBuffer = 2000;
        const timeDiff = Auth.getTimeDiff(
            state && state.authUser && state.authUser.exp
        );
        let timeoutCount =
            renewalTimeBuffer < timeDiff ? timeDiff - renewalTimeBuffer : timeDiff;
        if (timeoutCount) {
            const renewalTimeout = setTimeout(() => {
                dispatch(getNewRefreshToken());
            }, timeoutCount);
            dispatch({
                type: 'SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER',
                data: renewalTimeout
            });
        } else {
            await dispatch(getNewRefreshToken());
        }
    };
};


export const authenticationUser = async (name, password) => {
    return (dispatch, getState) => {
        return Auth.loginInTheApplication(name, password).then(async success => {
            await dispatch(authorize(success.data));
        });
    }
};

export const authorize = async (tokens) => {
    return async (dispatch, getState) => {
        const accessTokenValid = Auth.checkTokenValidity(tokens && tokens.accessToken)
        dispatch({
            type: 'SET_AUTHENTICATED',
            data: accessTokenValid
        });
        if (accessTokenValid) {
            dispatch({
                type: 'SET_AUTH_USER',
                data: tokens
            });
            await Auth.setLocalStorageTokens(tokens);
        }
        return dispatch(refreshToken());
    };
}

export const clearTimeoutToken = (state) => {
    return (dispatch, getState) => {
        clearTimeout(state.remainingTokenTime);
        dispatch({
            type: 'SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER',
            data: null
        });
    };
}

export const logoutUser = async () => {
    return async (dispatch, getState) => {
        await dispatch(clearTimeoutToken());
        Auth.removeLocalStorageTokens();
        dispatch({
            type: 'SET_AUTH_USER', data: null
        });
        dispatch({ type: 'SET_AUTHENTICATED', data: false });
        // router.push({ name: "login" });
    };
};

// old action below
export const register = (name, email, password, remember) => {
    return (dispatch, getState) => {
        const dispatchRegistrationSuccessful = function (res) {
            dispatch({
                type: REGISTRATION_SUCCESFULL,
                data: res.data,
                name: name,
                remember
            });
            dispatch({
                type: USER_LOADED,
                name,
                remember
            });

            return res.data, name, remember;
        };

        const dispatchRegistrationError = function (res) {
            dispatch({
                type: REGISTRATION_ERROR,
                data: res.data
            });
            throw res.data;
        };

        const dispatchRegistrationFailed = function (res) {
            dispatch({
                type: REGISTRATION_FAILED,
                data: res.data
            });
            throw res.data;
        };

        return fetchRegister(
            name,
            email,
            password,
            dispatchRegistrationSuccessful,
            dispatchRegistrationError,
            dispatchRegistrationFailed
        );
    };
};

export const login = (name, password, remember) => {
    return (dispatch, getState) => {
        const dispatchLoginSuccessful = function (res, name, remember) {
            dispatch({
                type: LOGIN_SUCCESSFUL,
                data: res.data,
                name: name,
                remember: remember
            });
            dispatch({
                type: USER_LOADED,
                name: name
            });

            return res.data, name, remember;
        };

        const dispatchUserAuthError = function (res) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: res.data
            });

            throw res.data;
        };

        const dispatchLoginFailed = function (res) {
            dispatch({
                type: LOGIN_FAILED,
                data: res.data
            });
            throw res.data;
        };

        return fetchLogin(
            name,
            password,
            remember,
            dispatchLoginSuccessful,
            dispatchUserAuthError,
            dispatchLoginFailed
        );
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        return dispatch({
            type: LOGOUT_SUCCESSFUL
        });
    };
};
