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
    LOGOUT_SUCCESSFUL,
    SET_AUTHENTICATED,
    SET_AUTH_USER,
    SET_USERS_LIST,
    SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER
} = eventStatuses.auth;

// pass validation will be added later (regEx, etc)

export const getNewRefreshToken = () => (dispatch, getState) => {
    console.log("feczujemy refresh");
    // return (dispatch, getState) => {
        new Promise(async resolve => {
            const response = await Auth.postRefreshToken(
                Auth.getRefreshToken()
            );
            dispatch(authorize(response.data));
            return resolve();
        });
    };
// };

export const refreshToken = () => (dispatch, getState) => {
    console.log("Odświeżanie tokena");
    // return (dispatch, getState) => {
    dispatch(clearTimeoutToken());
    const renewalTimeBuffer = 2000;
    console.log(renewalTimeBuffer);
    const timeDiff = Auth.getTimeDiff(
        getState().auth &&
            getState().auth.authUser &&
            getState().auth.authUser.exp
    );
    let timeoutCount =
        renewalTimeBuffer < timeDiff ? timeDiff - renewalTimeBuffer : timeDiff;
    return (dispatch, getState) => {
        if (timeoutCount) {
            const renewalTimeout = setTimeout(() => {
                dispatch(getNewRefreshToken());
            }, timeoutCount);
            dispatch({
                type: SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER,
                data: renewalTimeout
            });
        } else {
            dispatch(getNewRefreshToken());
        }
    };
};
// };

export const authenticationUser = (name, password) => async (
    dispatch,
    getState
) => {
    // return (dispatch, getState) => {
    console.log(getState().auth);
    const success = await Auth.loginInTheApplication(name, password);
    dispatch(authorize(success.data));
};
// };

export const authorize = tokens => (dispatch, getState) => {
    // return (dispatch, getState) => {
        const accessTokenValid = Auth.checkTokenValidity(
            tokens && tokens.accessToken
        );
        dispatch({
            type: SET_AUTHENTICATED,
            data: accessTokenValid
        });
        if (accessTokenValid) {
            dispatch({
                type: SET_AUTH_USER,
                data: tokens
            });
            Auth.setLocalStorageTokens(tokens);
        }
        return (dispatch, getState) => {
            dispatch(refreshToken());
        };
    };
// };

export const clearTimeoutToken = () => (dispatch, getState) => {
    // return (dispatch, getState) => {
        clearTimeout(getState().auth.tokenRefreshCounterId);
        dispatch({
            type: SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER,
            data: null
        });
    };
// };

export const logoutUser = () => (dispatch, getState) => {
    // return async (dispatch, getState) => {
        dispatch(clearTimeoutToken());
        Auth.removeLocalStorageTokens();
        dispatch({
            type: SET_AUTH_USER,
            data: null
        });
        dispatch({ type: SET_AUTHENTICATED, data: false });
        // router.push({ name: "login" });
    };
// };

// old action below
export const register = (name, email, password, remember) => {
    return (dispatch, getState) => {
        const dispatchRegistrationSuccessful = function(res) {
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

        const dispatchRegistrationError = function(res) {
            dispatch({
                type: REGISTRATION_ERROR,
                data: res.data
            });
            throw res.data;
        };

        const dispatchRegistrationFailed = function(res) {
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
        const dispatchLoginSuccessful = function(res, name, remember) {
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

        const dispatchUserAuthError = function(res) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: res.data
            });

            throw res.data;
        };

        const dispatchLoginFailed = function(res) {
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
