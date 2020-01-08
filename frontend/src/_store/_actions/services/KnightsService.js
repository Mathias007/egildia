import apiAdressses from "../../../_config/apiAdresses";
import fetchOptions from "../../../_config/fetchOptions";

const { KNIGHTS } = apiAdressses;
const { BUILDINGS, UNITS } = KNIGHTS;

const { method, headers } = fetchOptions;
const { GET } = method;

// obsługa statusów do dodania!

export const fetchBuildingsList = dispatchBuildingsListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(BUILDINGS, options)
        .then(response => {
            return response.json();
        })
        .then(buildings => {
            return dispatchBuildingsListLoaded(buildings);
        });
};

export const fetchUnitsList = dispatchUnitsListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(UNITS, options)
        .then(response => {
            return response.json();
        })
        .then(units => {
            return dispatchUnitsListLoaded(units);
        });
};
