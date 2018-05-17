import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import reducers from "./reducers";
//axios for custom client axios instance
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api"
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
