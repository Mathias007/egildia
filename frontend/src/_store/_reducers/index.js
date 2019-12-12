import { combineReducers } from "redux";

import auth from "./auth";
import knights from "./knights";

const chaosApp = combineReducers({
    auth, knights
});

export default chaosApp;