import eventStatuses from "../_config/eventStatuses";
import tzar from "../_store/_reducers/tzar";

const {
    TZAR_NATIONS_LOADED,
    TZAR_NATIONS_NOT_FOUND,
    TZAR_UNITS_LOADED,
    TZAR_UNITS_NOT_FOUND,
    TZAR_SPELLS_LOADED,
    TZAR_SPELLS_NOT_FOUND,
    TZAR_TECHNOLOGIES_LOADED,
    TZAR_TECHNOLOGIES_NOT_FOUND,
    AUTHENTICATION_ERROR
} = eventStatuses.tzar;

const initialState = {
    nations: [],
    spells: [],
    technologies: [],
    units: [],
    errorMessage: ""
};

describe("test users reducer", () => {
    const tzarList = {
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
        expect(tzar(undefined, {})).toEqual(initialState);
    });

    it("should load nations list", () => {
        const action = {
            type: TZAR_NATIONS_LOADED,
            data: tzarList.data
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            nations: action.data.tzarList
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should get message about nations list's not finding", () => {
        const action = { type: TZAR_NATIONS_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should load spells list", () => {
        const action = {
            type: TZAR_SPELLS_LOADED,
            data: tzarList.data
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            spells: action.data.tzarList
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should get message about nations list's not finding", () => {
        const action = { type: TZAR_SPELLS_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should load technologies list", () => {
        const action = {
            type: TZAR_TECHNOLOGIES_LOADED,
            data: tzarList.data
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            technologies: action.data.tzarList
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should get message about nations list's not finding", () => {
        const action = { type: TZAR_TECHNOLOGIES_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should load units list", () => {
        const action = { type: TZAR_UNITS_LOADED, data: tzarList.data };
        const expectedState = {
            ...initialState,
            ...action.data,
            units: action.data.tzarList
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should get message about units list's not finding", () => {
        const action = { type: TZAR_UNITS_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(tzar(initialState, action)).toEqual(expectedState);
    });
});
