import fetchBuildingsList from "./services/KnightsBuildingsService";

export const showBuildings = () => {
    return (dispatch, getState) => {
        const dispatchBuildingsListLoaded = function (buildings) {
            dispatch({
                type: "KAM_BUILDINGS_LOADED",
                data: buildings
            });
        };

        return fetchBuildingsList(dispatchBuildingsListLoaded);
    };
};
