import addressFragments from "./addressFragments";

const {
    ADMIN,
    ARTICLES,
    NEWS,
    ADD,
    EDIT,
    REMOVE,
    // SINGLE,
    // LIST,
    ID_PARAM,
    LOGIN,
    REGISTER,
    KNIGHTS,
    BUILDINGS,
    UNITS,
    TZAR,
    NATIONS,
    SPELLS,
    TECHNOLOGIES
} = addressFragments;

const routesPaths = {
    GENERAL: {
        INDEX: "/",
        LOGIN: `/${LOGIN}`,
        REGISTER: `/${REGISTER}`
    },
    ARTICLES: {
        MAIN: `/${ADMIN}/${ARTICLES}`,
        ADD: `/${ADMIN}/${ARTICLES}/${ADD}`,
        EDIT: `/${ADMIN}/${ARTICLES}/${EDIT}/${ID_PARAM}`,
        REMOVE: `/${ADMIN}/${ARTICLES}/${REMOVE}/${ID_PARAM}`
    },
    NEWS: {
        MAIN: `/${ADMIN}/${NEWS}`,
        ADD: `/${ADMIN}/${NEWS}/${ADD}`,
        EDIT: `/${ADMIN}/${NEWS}/${EDIT}/${ID_PARAM}`,
        REMOVE: `/${ADMIN}/${NEWS}/${REMOVE}/${ID_PARAM}`
    },
    KNIGHTS: {
        MAIN: `/${KNIGHTS}/`,
        BUILDINGS: `/${KNIGHTS}/${BUILDINGS}`,
        UNITS: `/${KNIGHTS}/${UNITS}`,
    },
    TZAR: {
        MAIN: `/${TZAR}/`,
        NATIONS: `/${TZAR}/${NATIONS}`,
        SPELLS: `/${TZAR}/${SPELLS}`,
        TECHNOLOGIES: `/${TZAR}/${TECHNOLOGIES}`,
        UNITS: `/${TZAR}/${UNITS}`
    }
};

export default routesPaths;
