import eventStatuses from "../../_config/eventStatuses";

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

export default function tzar(state = initialState, action) {
    switch (action.type) {
        case TZAR_NATIONS_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                nations: action.data.nations,
                errorMessage: action.data.message
            };

        case TZAR_NATIONS_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case TZAR_SPELLS_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                spells: action.data.spells,
                errorMessage: action.data.message
            };

        case TZAR_SPELLS_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case TZAR_TECHNOLOGIES_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                technologies: action.data.technologies,
                errorMessage: action.data.message
            };

        case TZAR_TECHNOLOGIES_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case TZAR_UNITS_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                units: action.data.units,
                errorMessage: action.data.message
            };

        case TZAR_UNITS_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        default:
            return state;
    }
}
