import eventStatuses from "../../_config/eventStatuses";
import tzar from "../../_store/_reducers/tzar";

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
    let tzarList;

    const serverMessage = { message: "Ważna wiadomość z serwera!" };

    it("should return the initial state", () => {
        expect(tzar(undefined, {})).toEqual(initialState);
    });

    it("should load nations list", () => {
        tzarList = {
            message: "Pozytywna wiadomość z serwera!",
            nations: [
                {
                    _id: "1111-2222-3333-4444",
                    name: "Nacje Tzar",
                }
            ]
        };

        const action = {
            type: TZAR_NATIONS_LOADED,
            data: tzarList
        };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should get message about nations list's not finding", () => {
        const action = { type: TZAR_NATIONS_NOT_FOUND, data: serverMessage };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should load spells list", () => {
        tzarList = {
            message: "Pozytywna wiadomość z serwera!",
            spells: [
                {
                    _id: "1111-2222-3333-4444",
                    name: "Zaklęcia Tzar",
                }
            ]
        };

        const action = {
            type: TZAR_SPELLS_LOADED,
            data: tzarList
        };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should get message about nations list's not finding", () => {
        const action = { type: TZAR_SPELLS_NOT_FOUND, data: serverMessage };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should load technologies list", () => {
        tzarList = {
            message: "Pozytywna wiadomość z serwera!",
            technologies: [
                {
                    _id: "1111-2222-3333-4444",
                    name: "Technologie Tzar",
                }
            ]
        };

        const action = {
            type: TZAR_TECHNOLOGIES_LOADED,
            data: tzarList
        };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should get message about nations list's not finding", () => {
        const action = {
            type: TZAR_TECHNOLOGIES_NOT_FOUND,
            data: serverMessage
        };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should load units list", () => {
        tzarList = {
            message: "Pozytywna wiadomość z serwera!",
            units: [
                {
                    _id: "1111-2222-3333-4444",
                    name: "Jednostki Tzar",
                }
            ]
        };

        const action = { type: TZAR_UNITS_LOADED, data: tzarList };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should get message about units list's not finding", () => {
        const action = { type: TZAR_UNITS_NOT_FOUND, data: serverMessage };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: serverMessage };
        expect(tzar(initialState, action)).toMatchSnapshot();
    });
});
