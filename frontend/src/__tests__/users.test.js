import eventStatuses from "../_config/eventStatuses";
import users from "../_store/_reducers/users";

const {
    USER_SUCCESSFULLY_LOADED,
    USER_NOT_FOUND,
    USERS_LIST_LOADED,
    USERS_LIST_NOT_FOUND,
    USER_ADDED,
    USER_ADDING_FAILED,
    USER_SUCCESFULLY_EDITED,
    USER_EDITING_FAILED,
    USER_SUCCESFULLY_DELETED,
    USER_DELETING_FAILED,
    AUTHENTICATION_ERROR
} = eventStatuses.users;

const initialState = {
    usersList: [],
    selectedUser: {},
    errorMessage: ""
};

describe("test users reducer", () => {
    const usersList = {
        message: "Pozytywna wiadomość z serwera!",
        data: [
            {
                _id: "1111-2222-3333-4444",
                name: "tester",
                email: "test@mail.com",
                password: "Terror2137",
                role: "TESTER",
                date: "01-01-2020"
            }
        ]
    };

    const singleUser = {
        message: "Okuratna wiadomość z serwera!",
        data: {
            _id: "1111-2222-3333-4444",
            name: "tester",
            email: "test@mail.com",
            password: "Terror2137",
            role: "TESTER",
            date: "01-01-2020"
        }
    };

    const message = "Ważna wiadomość z serwera!";

    it("should return the initial state", () => {
        expect(users(undefined, {})).toEqual(initialState);
    });

    it("should load users list", () => {
        const action = { type: USERS_LIST_LOADED, data: usersList.data };
        const expectedState = {
            ...initialState,
            ...action.data,
            usersList: action.data.usersList
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about users list's not finding", () => {
        const action = { type: USERS_LIST_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should load a single user", () => {
        const action = {
            type: USER_SUCCESSFULLY_LOADED,
            data: singleUser.data
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            selectedUser: action.data.singleUser
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about single users' not finding", () => {
        const action = { type: USER_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about adding user to database", () => {
        const action = { type: USER_ADDED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about user's adding fail", () => {
        const action = { type: USER_ADDING_FAILED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about modifying user in database", () => {
        const action = {
            type: USER_SUCCESFULLY_EDITED,
            data: { singleUser }
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            selectedUser: action.data.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about user's modifying fail", () => {
        const action = { type: USER_EDITING_FAILED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about removing user from database", () => {
        const action = { type: USER_SUCCESFULLY_DELETED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about user's removing fail", () => {
        const action = { type: USER_DELETING_FAILED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(users(initialState, action)).toEqual(expectedState);
    });
});
