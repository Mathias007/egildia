import address from "../../config/adress";

const { API_URL, KNIGHTS, BUILDINGS } = address;

const fetchBuildingsList = dispatchBuildingsListLoaded => {
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

export default fetchBuildingsList;