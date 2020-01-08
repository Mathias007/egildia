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
} = eventStatuses.auth;

export const initialState = {
    usersList: [],
    selectedUser: {},
    errorMessage: ""
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case USER_SUCCESSFULLY_LOADED:
            console.log(action.data.user);
            return {
                ...state,
                ...action.data,
                selectedUser: action.data.user
            };

        case USER_NOT_FOUND:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USERS_LIST_LOADED:
            console.log(action.data.users);
            return {
                ...state,
                ...action.data,
                usersList: action.data.users
            };

        case USER_ADDED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: "Something went wrong."
            };

        case USER_ADDING_FAILED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USER_SUCCESFULLY_EDITED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USER_EDITING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USER_SUCCESFULLY_DELETED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USER_DELETING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        default:
            return state;
    }
}
