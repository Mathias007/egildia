import eventStatuses from "../../_config/eventStatuses";

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

export default function knights(state = initialState, action) {
    switch (action.type) {
        case KAM_BUILDINGS_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                buildings: action.data.buildings
            };

        case KAM_BUILDINGS_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case KAM_UNITS_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                units: action.data.units
            };

        case KAM_UNITS_NOT_FOUND:
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
