import { createStore, applyMiddleware } from "redux";
import chaosApp from './reducers';

import thunk from "redux-thunk";



export let store = createStore(chaosApp, applyMiddleware(thunk));
