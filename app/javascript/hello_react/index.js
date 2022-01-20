import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";

const container = document.querySelector("#hello");
if (container) {
  ReactDOM.render(
    React.createElement(Hello, { toWhat: container.dataset.toWhat }, null),
    container
  );
}
