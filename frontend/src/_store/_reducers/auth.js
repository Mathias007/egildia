import eventStatuses from "../../_config/eventStatuses";

const {
    REGISTRATION_SUCCESFULL,
    REGISTRATION_ERROR,
    REGISTRATION_FAILED,
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    AUTHENTICATION_ERROR,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL
} = eventStatuses.auth;

const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    isAuthenticated: null,
    name: localStorage.getItem("name"),
    errorMessage: ""
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true
            };

        case REGISTRATION_SUCCESFULL:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                autoLogin: action.stayLogged,
                name: localStorage.getItem("name")
            };

        case REGISTRATION_ERROR:
            return {
                ...state,
                ...action.data,
                errorMessage: "Something went wrong."
            };

        case REGISTRATION_FAILED:
            return {
                ...state,
                ...action.data,
                errorMessage: "Registration data is incorrect."
            };

        case LOGIN_SUCCESSFUL:
            console.log(action.remember);

            return {
                ...state,
                ...action.data,
                name: localStorage.getItem("name"),
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
