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
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.users;

export const initialState = {
    usersList: [],
    selectedUser: {},
    errorMessage: "",
    status: null
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case USERS_LIST_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                usersList: action.data.users,
                errorMessage: action.data.message
            };

        case USERS_LIST_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USER_SUCCESSFULLY_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                selectedUser: action.data.selectedUser,
                errorMessage: action.data.message
            };

        case USER_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case USER_ADDED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case USER_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case USER_SUCCESFULLY_EDITED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                selectedUser: action.data.selectedUser,
                errorMessage: action.data.message,
                status: action.status
            };

        case USER_EDITING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case USER_SUCCESFULLY_DELETED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case USER_DELETING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case RESET_STATUS:
            return { ...state, status: null };

        default:
            return state;
    }
}
