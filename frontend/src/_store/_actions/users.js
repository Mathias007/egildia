import {
    getAllUsers,
    getSingleUser,
    addUser,
    editUser,
    deleteUser
} from "./services/UsersService";

import eventStatuses from "../../_config/eventStatuses";

const {
    USER_SUCCESSFULLY_LOADED,
    USER_NOT_FOUND,
    USERS_LIST_LOADED,
    USER_ADDED,
    AUTHENTICATION_ERROR,
    USER_ADDING_FAILED,
    USER_SUCCESFULLY_EDITED,
    USER_EDITING_FAILED,
    USER_SUCCESFULLY_DELETED,
    USER_DELETING_FAILED
} = eventStatuses.users;

const { USER_LOADED } = eventStatuses.auth;

export const showUserProfile = id => {
    return (dispatch, getState) => {
        const dispatchSingleUserLoaded = function(response) {
            dispatch({
                type: USER_SUCCESSFULLY_LOADED,
                data: response.data
            });
        };

        const dispatchUserAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchUserNotFound = function(response) {
            dispatch({ type: USER_NOT_FOUND, data: response.data });
            throw response.data;
        };

        return getSingleUser(
            id,
            dispatchSingleUserLoaded,
            dispatchUserAuthError,
            dispatchUserNotFound
        );
    };
};

export const showUsersList = () => {
    return (dispatch, getState) => {
        const dispatchUsersListLoaded = function(users) {
            dispatch({
                type: USERS_LIST_LOADED,
                data: users
            });
        };

        return getAllUsers(dispatchUsersListLoaded);
    };
};

export const register = (name, email, password, remember) => {
    return (dispatch, getState) => {
        const dispatchRegistrationSuccessful = function(res) {
            dispatch({
                type: USER_ADDED,
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
                type: AUTHENTICATION_ERROR,
                data: res.data
            });
            throw res.data;
        };

        const dispatchRegistrationFailed = function(res) {
            dispatch({
                type: USER_ADDING_FAILED,
                data: res.data
            });
            throw res.data;
        };

        return addUser(
            name,
            email,
            password,
            dispatchRegistrationSuccessful,
            dispatchRegistrationError,
            dispatchRegistrationFailed
        );
    };
};
export const editSelectedUser = (id, name, email, password) => {
    return (dispatch, getState) => {
        const dispatchUserEdited = function(response) {
            dispatch({
                type: USER_SUCCESFULLY_EDITED,
                data: response.data
            });
            return response.data;
        };

        const dispatchUserAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchUserEditingFailed = function(response) {
            dispatch({ type: USER_EDITING_FAILED, data: response.data });
            throw response.data;
        };

        return editUser(
            id,
            name,
            email,
            password,
            dispatchUserEdited,
            dispatchUserAuthError,
            dispatchUserEditingFailed
        );
    };
};

export const deleteSelectedUser = id => {
    return (dispatch, getState) => {
        const dispatchUserDeleted = function(response) {
            dispatch({
                type: USER_SUCCESFULLY_DELETED,
                data: response.data
            });
            return response.data;
        };

        const dispatchUserAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchUserDeletingFailed = function(response) {
            dispatch({ type: USER_DELETING_FAILED, data: response.data });
            throw response.data;
        };

        return deleteUser(
            id,
            dispatchUserDeleted,
            dispatchUserAuthError,
            dispatchUserDeletingFailed
        );
    };
};
