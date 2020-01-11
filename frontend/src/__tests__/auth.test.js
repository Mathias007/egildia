import eventStatuses from "../_config/eventStatuses";
import auth from "../_store/_reducers/auth";

const {
    USER_LOADED,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    LOGOUT_SUCCESSFUL,
    AUTHENTICATION_ERROR
} = eventStatuses.auth;

const { USER_ADDED } = eventStatuses.users;

const initialState = {
    accessToken: null,
    refreshToken: null,
    autoLogin: null,
    isAuthenticated: null,
    userId: "",
    name: "",
    errorMessage: ""
};

describe("test auth reducer", () => {
    const authTokens = {
        accessToken: "aaaa.bbbb.cccc",
        refreshToken: "cccc.bbbb.aaaa",
        id: "1111-2222-3333-4444"
    };

    const name = "testUser";
    const stayLogged = true;

    const message = "Ważna wiadomość z serwera!";

    it("should return the initial state", () => {
        expect(auth(undefined, {})).toEqual(initialState);
    });

    it("should confirm user's authentication", () => {
        const action = { type: USER_LOADED };
        expect(auth(initialState, action)).toMatchSnapshot();
    });

    it("should confirm user's adding", () => {
        const action = { type: USER_ADDED, name, stayLogged };
        expect(auth(initialState, action)).toMatchSnapshot();
    });

    it("should login user", () => {
        const action = {
            type: LOGIN_SUCCESSFUL,
            data: authTokens.id,
            name,
            stayLogged
        };
        expect(auth(initialState, action)).toMatchSnapshot();
    });

    it("should get message about user's login fail", () => {
        const action = { type: LOGIN_FAILED, data: message };
        expect(auth(initialState, action)).toMatchSnapshot();
    });

    it("should logout user", () => {
        const action = { type: LOGOUT_SUCCESSFUL };
        expect(auth(initialState, action)).toMatchSnapshot();
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: message };
        expect(auth(initialState, action)).toMatchSnapshot();
    });
});
