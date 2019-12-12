import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import chaosApp from './_reducers';
import persistTokens from "./_middleware/auth"

export let store = createStore(chaosApp, applyMiddleware(thunk, persistTokens));
