import { combineReducers } from "redux";

import articles from "./articles";
import auth from "./auth";
import news from "./news";
import knights from "./knights";
import tzar from "./tzar";
import users from "./users";

const egildiaApp = combineReducers({
    articles,
    auth,
    news,
    knights,
    tzar,
    users
});

export default egildiaApp;
