import eventStatuses from "../../_config/eventStatuses";

const {
    TZAR_NATIONS_LOADED,
    TZAR_UNITS_LOADED,
    TZAR_SPELLS_LOADED,
    TZAR_TECHNOLOGIES_LOADED
} = eventStatuses.tzar;

const initialState = {
    nations: [],
    spells: [],
    technologies: [],
    units: []
};

export default function tzar(state = initialState, action) {
    switch (action.type) {
        case TZAR_NATIONS_LOADED:
            console.log(action.data);
            console.log("sukces ładowania nacji Tzar!");
            return {
                ...state,
                ...action.data,
                nations: action.data
            };

        case TZAR_SPELLS_LOADED:
            console.log(action.data);
            console.log("sukces ładowania zaklęć Tzar!");
            return {
                ...state,
                ...action.data,
                spells: action.data
            };

        case TZAR_TECHNOLOGIES_LOADED:
            console.log(action.data);
            console.log("sukces ładowania technologii Tzar!");
            return {
                ...state,
                ...action.data,
                technologies: action.data
            };

        case TZAR_UNITS_LOADED:
            console.log(action.data);
            console.log("sukces ładowania jednostek Tzar!");
            return {
                ...state,
                ...action.data,
                units: action.data
            };

        default:
            return state;
    }
}
