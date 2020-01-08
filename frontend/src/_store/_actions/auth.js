import eventStatuses from "../../_config/eventStatuses";

import fetchLogin from "./services/LoginService";

const {
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL
} = eventStatuses.auth;

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
