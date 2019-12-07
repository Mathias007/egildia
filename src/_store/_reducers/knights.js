const initialState = {
    buildings: [],
    units: []
};

export default function knights(state = initialState, action) {
    switch (action.type) {

        case 'KAM_BUILDINGS_LOADED':
            console.log(action.data)
            console.log('sukces!')
            return {
                ...state,
                ...action.data,
                buildings: action.data
            };


        default:
            return state;
    }
}