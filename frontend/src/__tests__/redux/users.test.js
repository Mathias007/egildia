import eventStatuses from "../../_config/eventStatuses";
import users from "../../_store/_reducers/users";

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
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.users;

const initialState = {
    usersList: [],
    selectedUser: {},
    errorMessage: "",
    status: null
};

describe("test users reducer", () => {
    const usersList = {
        message: "Pozytywna wiadomość z serwera!",
        users: [
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
        selectedUser: {
            _id: "1111-2222-3333-4444",
            name: "tester",
            email: "test@mail.com",
            password: "Terror2137",
            role: "TESTER",
            date: "01-01-2020"
        }
    };

    const serverMessage = { message: "Ważna wiadomość z serwera!" };

    const serverStatus = 200;

    it("should return the initial state", () => {
        expect(users(undefined, {})).toEqual(initialState);
    });

    it("should load users list", () => {
        const action = { type: USERS_LIST_LOADED, data: usersList };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about users list's not finding", () => {
        const action = { type: USERS_LIST_NOT_FOUND, data: serverMessage };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should load a single user", () => {
        const action = {
            type: USER_SUCCESSFULLY_LOADED,
            data: singleUser
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about single users' not finding", () => {
        const action = { type: USER_NOT_FOUND, data: serverMessage };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about adding user to database", () => {
        const action = {
            type: USER_ADDED,
            data: serverMessage,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about user's adding fail", () => {
        const action = {
            type: USER_ADDING_FAILED,
            data: serverMessage,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about modifying user in database", () => {
        const action = {
            type: USER_SUCCESFULLY_EDITED,
            data: singleUser,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about user's modifying fail", () => {
        const action = {
            type: USER_EDITING_FAILED,
            data: serverMessage,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about removing user from database", () => {
        const action = {
            type: USER_SUCCESFULLY_DELETED,
            data: serverMessage,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about user's removing fail", () => {
        const action = {
            type: USER_DELETING_FAILED,
            data: serverMessage,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should get message about a problem with authentication", () => {
        const action = {
            type: AUTHENTICATION_ERROR,
            data: serverMessage,
            status: serverStatus
        };
        expect(users(initialState, action)).toMatchSnapshot();
    });

    it("should remove server status from the state", () => {
        const action = {
            type: RESET_STATUS
        };
        expect(users(initialState, action)).toMatchSnapshot;
    });
});
