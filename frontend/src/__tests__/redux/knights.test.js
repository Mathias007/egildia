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
    let knightsList;

    const serverMessage = { message: "Ważna wiadomość z serwera!" };

    it("should return the initial state", () => {
        expect(knights(undefined, {})).toEqual(initialState);
    });

    it("should load buildings list", () => {
        knightsList = {
            message: "Pozytywna wiadomość z serwera!",
            buildings: [
                {
                    _id: "1111-2222-3333-4444",
                    name: "Budynki Knights and Merchants"
                }
            ]
        };

        const action = {
            type: KAM_BUILDINGS_LOADED,
            data: knightsList
        };
        expect(knights(initialState, action)).toMatchSnapshot();
    });

    it("should get message about buildings list's not finding", () => {
        const action = { type: KAM_BUILDINGS_NOT_FOUND, data: serverMessage };
        expect(knights(initialState, action)).toMatchSnapshot();
    });

    it("should load units list", () => {
        knightsList = {
            message: "Pozytywna wiadomość z serwera!",
            units: [
                {
                    _id: "1111-2222-3333-4444",
                    name: "Jednostki Knights and Merchants"
                }
            ]
        };

        const action = { type: KAM_UNITS_LOADED, data: knightsList };
        expect(knights(initialState, action)).toMatchSnapshot();
    });

    it("should get message about units list's not finding", () => {
        const action = { type: KAM_UNITS_NOT_FOUND, data: serverMessage };
        expect(knights(initialState, action)).toMatchSnapshot();
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: serverMessage };
        expect(knights(initialState, action)).toMatchSnapshot();
    });
});
