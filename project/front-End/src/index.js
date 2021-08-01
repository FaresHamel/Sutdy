import React from "react";
import ReactDOM from "react-dom";
import "./container/index.css";
import App from "./container/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
