import * as Auth from "../api/auth";

export const constans = {
    SET_AUTHENTICATED: "SET_AUTHENTICATED",
    SET_AUTH_USER: "SET_AUTH_USER",
    SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER:
        "SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER",
    SET_USERS_LIST: "SET_USERS_LIST"
};

export const initialState = {
    isAuthorized: false,
    tokenRefreshCounterId: null,
    auth: {},
    account: {
        users: []
    }
};

const {
    SET_AUTHENTICATED,
    SET_AUTH_USER,
    SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER
} = constans;

export default function auth(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            console.log(action.data);
            const decodeAccessToken = Auth.decodeJWT(
                action.data && action.data.accessToken
            );
            return {
                ...state,
                ...action.data,
                accessToken: (action.data && action.data.accessToken) || "",
                refreshToken: (action.data && action.data.refreshToken) || "",
                sub: (decodeAccessToken && decodeAccessToken.sub) || "",
                rol: (decodeAccessToken && decodeAccessToken.rol) || "",
                iat: (decodeAccessToken && decodeAccessToken.iat) || "",
                exp: (decodeAccessToken && decodeAccessToken.exp) || ""
            };

        case SET_AUTHENTICATED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data
            };

        case SET_ID_REPRESENTING_TOKEN_REFRESH_COUNTER:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                tokenRefreshCounterId: action.data
            };
        default:
            return state;
        // case SET_USERS_LIST:
        // // (state, payload)
        //         Vue.set(state.account, "users", payload.users);
        //     }
    }
}
