import address from "../../../_config/address";

const { API_URL, KNIGHTS, BUILDINGS, UNITS } = address;

export const fetchBuildingsList = dispatchBuildingsListLoaded => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
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
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`${API_URL}${KNIGHTS}/${UNITS}`, options)
        .then(res => {
            return res.json();
        })
        .then(units => {
            return dispatchUnitsListLoaded(units);
        });
};
