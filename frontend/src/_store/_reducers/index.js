import { combineReducers } from "redux";

import auth from "./auth";
import knights from "./knights";
import tzar from "./tzar";

const egildiaApp = combineReducers({
    auth,
    knights,
    tzar
});

export default egildiaApp;
