import { combineReducers } from "redux";

import articles from "./articles";
import auth from "./auth";
import knights from "./knights";
import tzar from "./tzar";

const egildiaApp = combineReducers({
    articles,
    auth,
    knights,
    tzar
});

export default egildiaApp;
