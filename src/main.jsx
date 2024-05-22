import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { imageApi } from "./services/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        {/* <ApiProvider api={imageApi}> */}
        <App />
        {/* </ApiProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
