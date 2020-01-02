import address from "../../../_config/address";
import fetchOptions from "../../../_config/fetchOptions";

const { API_URL, KNIGHTS, BUILDINGS, UNITS } = address;
const { method, headers } = fetchOptions;

// obsługa statusów do dodania!

export const fetchBuildingsList = dispatchBuildingsListLoaded => {
    const options = {
        method: method.GET,
        headers
    };

    fetch(`${API_URL}${KNIGHTS}/${BUILDINGS}`, options)
        .then(res => {
            return res.json();
        })
        .then(buildings => {
            return dispatchBuildingsListLoaded(buildings);
        });
};

export const fetchUnitsList = dispatchUnitsListLoaded => {
    const options = {
        method: method.GET,
        headers
    };

    fetch(`${API_URL}${KNIGHTS}/${UNITS}`, options)
        .then(res => {
            return res.json();
        })
        .then(units => {
            return dispatchUnitsListLoaded(units);
        });
};
