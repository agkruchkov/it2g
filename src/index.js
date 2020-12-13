import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
