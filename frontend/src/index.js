import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./_config/serviceWorker";
import { store } from "./_store/store";

import App from "./App/App";
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("egildia-root")
);

serviceWorker.unregister();
