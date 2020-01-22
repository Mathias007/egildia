import {
    getAllUsers,
    getSingleUser,
    addUser,
    editUser,
    deleteUser
} from "./services/UsersService";

import eventStatuses from "../../_config/eventStatuses";

const {
    USERS_LIST_LOADED,
    USERS_LIST_NOT_FOUND,
    USER_SUCCESSFULLY_LOADED,
    USER_NOT_FOUND,
    USER_ADDED,
    USER_ADDING_FAILED,
    USER_SUCCESFULLY_EDITED,
    USER_EDITING_FAILED,
    USER_SUCCESFULLY_DELETED,
    USER_DELETING_FAILED,
    AUTHENTICATION_ERROR
} = eventStatuses.users;

const { USER_LOADED } = eventStatuses.auth;

export const showUsersList = () => {
    return (dispatch, getState) => {
        const dispatchUsersListLoaded = function(response) {
            dispatch({
                type: USERS_LIST_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchUsersAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchUsersNotFound = function(response) {
            dispatch({
                type: USERS_LIST_NOT_FOUND,
                data: response.data,
                status: response.status
            });
        };

        return getAllUsers(
            dispatchUsersListLoaded,
            dispatchUsersAuthError,
            dispatchUsersNotFound
        );
    };
};

export const showUserProfile = id => {
    return (dispatch, getState) => {
        const dispatchSingleUserLoaded = function(response) {
            dispatch({
                type: USER_SUCCESSFULLY_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchUserAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchUserNotFound = function(response) {
            dispatch({
                type: USER_NOT_FOUND,
                data: response.data,
                status: response.status
            });
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

export const register = (name, email, password, role, date, remember) => {
    return (dispatch, getState) => {
        const dispatchRegistrationSuccessful = function(response) {
            dispatch({
                type: USER_ADDED,
                data: response.data,
                name: name,
                remember,
                status: response.status
            });
            dispatch({
                type: USER_LOADED,
                name,
                remember
            });

            return response.data, name, remember;
        };

        const dispatchRegistrationError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchRegistrationFailed = function(response) {
            dispatch({
                type: USER_ADDING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return addUser(
            name,
            email,
            password,
            role,
            date,
            dispatchRegistrationSuccessful,
            dispatchRegistrationError,
            dispatchRegistrationFailed
        );
    };
};

export const editSelectedUser = (id, name, email, password, role, date) => {
    return (dispatch, getState) => {
        const dispatchUserEdited = function(response) {
            dispatch({
                type: USER_SUCCESFULLY_EDITED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchUserAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchUserEditingFailed = function(response) {
            dispatch({
                type: USER_EDITING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return editUser(
            id,
            name,
            email,
            password,
            role,
            date,
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
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchUserAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchUserDeletingFailed = function(response) {
            dispatch({
                type: USER_DELETING_FAILED,
                data: response.data,
                status: response.status
            });
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
