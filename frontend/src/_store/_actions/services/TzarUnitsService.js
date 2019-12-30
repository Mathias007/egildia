import address from "../../../_config/address";

const { API_URL, TZAR, UNITS } = address;

const fetchUnitsList = dispatchUnitsListLoaded => {
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

export default fetchUnitsList;
