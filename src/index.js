import reportWebVitals from "./reportWebVitals";

import React from "react";
import MainApp from "./App";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";


ReactDOM.render(
  <MainApp />,document.getElementById('root'));

reportWebVitals();

window.store = store;
