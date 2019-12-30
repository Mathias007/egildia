import address from "../../../_config/address";

const { API_URL, TZAR, NATIONS } = address;

const fetchNationsList = dispatchNationsListLoaded => {
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

export default fetchNationsList;
