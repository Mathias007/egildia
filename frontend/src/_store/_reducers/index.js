import { combineReducers } from "redux";

import articles from "./articles";
import auth from "./auth";
import news from "./news";

import knights from "./knights";
import tzar from "./tzar";

const egildiaApp = combineReducers({
    articles,
    auth,
    news,
    knights,
    tzar
});

export default egildiaApp;
