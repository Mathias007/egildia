import eventStatuses from "../_config/eventStatuses";
import knights from "../_store/_reducers/knights";

const {
    KAM_BUILDINGS_LOADED,
    KAM_BUILDINGS_NOT_FOUND,
    KAM_UNITS_LOADED,
    KAM_UNITS_NOT_FOUND,
    AUTHENTICATION_ERROR
} = eventStatuses.knights;

const initialState = {
    buildings: [],
    units: [],
    errorMessage: ""
};

describe("test users reducer", () => {
    const knightsList = {
        message: "Pozytywna wiadomość z serwera!",
        data: [
            {
                _id: "1111-2222-3333-4444",
                name: "Hobok",
                cost: "1488 gold",
                hp: "500",
                worker: "tester"
            }
        ]
    };

    const message = "Ważna wiadomość z serwera!";

    it("should return the initial state", () => {
        expect(knights(undefined, {})).toEqual(initialState);
    });

    it("should load buildings list", () => {
        const action = {
            type: KAM_BUILDINGS_LOADED,
            data: knightsList.data
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            buildings: action.data.knightsList
        };
        expect(knights(initialState, action)).toEqual(expectedState);
    });

    it("should get message about buildings list's not finding", () => {
        const action = { type: KAM_BUILDINGS_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(knights(initialState, action)).toEqual(expectedState);
    });

    it("should load units list", () => {
        const action = { type: KAM_UNITS_LOADED, data: knightsList.data };
        const expectedState = {
            ...initialState,
            ...action.data,
            units: action.data.knightsList
        };
        expect(knights(initialState, action)).toEqual(expectedState);
    });

    it("should get message about units list's not finding", () => {
        const action = { type: KAM_UNITS_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(knights(initialState, action)).toEqual(expectedState);
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(knights(initialState, action)).toEqual(expectedState);
    });
});
