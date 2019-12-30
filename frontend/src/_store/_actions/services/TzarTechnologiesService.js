import address from "../../../_config/address";

const { API_URL, TZAR, TECHNOLOGIES } = address;

const fetchTechnologiesList = dispatchTechnologiesListLoaded => {
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

export default fetchTechnologiesList;
