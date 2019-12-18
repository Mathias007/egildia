import eventStatuses from "../../_config/eventStatuses";

import * as Auth from '../authFunctions';

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
    // old auth
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    isAuthenticated: null,
    name: localStorage.getItem("name"),
    errorMessage: "",

    // new auth (with refresh)
    isAuthorized: false,
    tokenRefreshCounterId: null,
    auth: {},
    account: {
        users: []
    }
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        // new auth
        case "SET_AUTH_USER":
            // (state, tokens) 
            const decodeAccessToken = Auth.decodeJWT(action.data && action.data.accessToken);
            return {
                ...state,
                ...action.data,
                auth: {
                    accessToken: action.data && action.data.accessToken || "",
                    refreshToken: action.data && action.data.refreshToken || "",
                    sub: decodeAccessToken && decodeAccessToken.sub || "",
                    rol: decodeAccessToken && decodeAccessToken.rol || "",
                    iat: decodeAccessToken && decodeAccessToken.iat || "",
                    exp: decodeAccessToken && decodeAccessToken.exp || ""
                }
            }





        // old auth
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
