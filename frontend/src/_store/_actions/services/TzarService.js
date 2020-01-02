import address from "../../../_config/address";

const { API_URL, TZAR, NATIONS, SPELLS, TECHNOLOGIES, UNITS } = address;

export const fetchNationsList = dispatchNationsListLoaded => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`${API_URL}${TZAR}/${NATIONS}`, options)
        .then(res => {
            return res.json();
        })
        .then(nations => {
            return dispatchNationsListLoaded(nations);
        });
};

export const fetchSpellsList = dispatchSpellsListLoaded => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`${API_URL}${TZAR}/${SPELLS}`, options)
        .then(res => {
            return res.json();
        })
        .then(spells => {
            return dispatchSpellsListLoaded(spells);
        });
};

export const fetchTechnologiesList = dispatchTechnologiesListLoaded => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`${API_URL}${TZAR}/${TECHNOLOGIES}`, options)
        .then(res => {
            return res.json();
        })
        .then(technologies => {
            return dispatchTechnologiesListLoaded(technologies);
        });
};

export const fetchUnitsList = dispatchUnitsListLoaded => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`${API_URL}${TZAR}/${UNITS}`, options)
        .then(res => {
            return res.json();
        })
        .then(units => {
            return dispatchUnitsListLoaded(units);
        });
};
