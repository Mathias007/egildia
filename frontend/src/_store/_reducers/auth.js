import eventStatuses from "../../_config/eventStatuses";

const {
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL
} = eventStatuses.auth;

const { USER_ADDED } = eventStatuses.users;

export const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    isAuthenticated: null,
    name: "",
    errorMessage: ""
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
                    name: action.name
                };
            } else {
                return {
                    ...state,
                    ...action.data
                };
            }

        case LOGIN_SUCCESSFUL:
            console.log(action.remember);

            return {
                ...state,
                ...action.data,
                name: action.name,
                remember: action.remember
            };

        case AUTHENTICATION_ERROR:
            return {
                ...state,
                ...action.data,
                errorMessage: "Something went wrong."
            };

        case LOGIN_FAILED:
            return {
                ...state,
                ...action.data,
                errorMessage: "Failed login or password"
            };
        case LOGOUT_SUCCESSFUL:
            return {
                ...state,
                accessToken: null,
                remember: false,
                name: null,
                isAuthenticated: false
            };

        default:
            return state;
    }
}
