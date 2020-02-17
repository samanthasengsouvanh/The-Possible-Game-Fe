import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";

// Health Check
axios
  .get(process.env.REACT_APP_URL + "/ping")
  .then(() => {
    console.log("should be working");
  })
  .catch(() => {
    console.log("something is wrong");
  });
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
