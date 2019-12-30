import address from "../../../_config/address";

const { API_URL, TZAR, SPELLS } = address;

const fetchSpellsList = dispatchSpellsListLoaded => {
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

export default fetchSpellsList;
