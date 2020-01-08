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
        const dispatchLoginSuccessful = function(response, name, remember) {
            dispatch({
                type: LOGIN_SUCCESSFUL,
                data: response.data,
                name: name,
                remember: remember
            });
            dispatch({
                type: USER_LOADED,
                name: name
            });

            return (response.data, name, remember);
        };

        const dispatchUserAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data
            });

            throw response.data;
        };

        const dispatchLoginFailed = function(response) {
            dispatch({
                type: LOGIN_FAILED,
                data: response.data
            });
            throw response.data;
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
