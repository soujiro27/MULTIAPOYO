import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router}  from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/rootReducer";
import "./index.css";
import App from "./router/App";

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
     <Router>
      <App />
     </Router>
  </Provider>
);
