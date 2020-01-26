import eventStatuses from "../../_config/eventStatuses";

const {
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.auth;

const { USER_ADDED } = eventStatuses.users;

export const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    autoLogin: null,
    isAuthenticated: null,
    userId: "",
    name: "",
    errorMessage: "",
    status: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true
            };

        case USER_ADDED:
            console.log(action.data);
            if (!state.name) {
                return {
                    ...state,
                    ...action.data,
                    autoLogin: action.stayLogged,
                    name: action.name,
                    errorMessage: action.data.message
                };
            } else {
                return {
                    ...state,
                    ...action.data,
                    errorMessage: action.data.message
                };
            }

        case LOGIN_SUCCESSFUL:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                userId: action.data._id,
                name: action.name,
                autoLogin: action.stayLogged,
                errorMessage: action.data.message,
                status: action.status
            };

        case LOGIN_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case LOGOUT_SUCCESSFUL:
            return {
                ...state,
                accessToken: null,
                remember: false,
                name: null,
                isAuthenticated: false,
                status: null
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case RESET_STATUS:
            return { ...state, status: null };

        default:
            return state;
    }
}
