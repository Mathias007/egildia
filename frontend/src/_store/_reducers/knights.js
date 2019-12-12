import eventStatuses from "../../_config/eventStatuses";

const { KAM_BUILDINGS_LOADED, KAM_UNITS_LOADED } = eventStatuses.knights;

const initialState = {
    buildings: [],
    units: []
};

export default function knights(state = initialState, action) {
    switch (action.type) {

        case KAM_BUILDINGS_LOADED:
            console.log(action.data)
            console.log('sukces ładowania budynków!')
            return {
                ...state,
                ...action.data,
                buildings: action.data
            };

        case KAM_UNITS_LOADED:
            console.log(action.data)
            console.log('sukces ładowania jednostek!')
            return {
                ...state,
                ...action.data,
                units: action.data
            }

        default:
            return state;
    }
}
