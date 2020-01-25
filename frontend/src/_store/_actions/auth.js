import eventStatuses from "../../_config/eventStatuses";

import fetchLogin from "./services/LoginService";

const {
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.auth;

export const login = (name, password, stayLogged) => {
    return (dispatch, getState) => {
        const dispatchLoginSuccessful = function(response, name, stayLogged) {
            dispatch({
                type: LOGIN_SUCCESSFUL,
                data: response.data,
                name,
                stayLogged,
                status: response.status
            });
            dispatch({
                type: USER_LOADED,
                name: name
            });

            return response.data, name, stayLogged;
        };

        const dispatchUserAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });

            throw response.data;
        };

        const dispatchLoginFailed = function(response) {
            dispatch({
                type: LOGIN_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return fetchLogin(
            name,
            password,
            stayLogged,
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

export const cleanServerStatus = () => {
    return (dispatch, getState) => {
        return dispatch({
            type: RESET_STATUS
        });
    };
};
