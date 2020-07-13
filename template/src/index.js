import React from "react";
import ReactDOM from "react-dom";
import "@pacificoseguros/pixie/variables.css";
import "./assets/styles/index.css";
import App from "./containers/app/app";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles/theme/theme.scss";
//ReactDOM.render(<App />, document.getElementById("root"));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement);
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();
} else {
    ReactDOM.render(<App />, rootElement);
}
