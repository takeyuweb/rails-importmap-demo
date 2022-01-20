import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector("#hello");
  if (container) {
    return ReactDOM.render(
      React.createElement(Hello, { toWhat: container.dataset.toWhat }, null),
      container
    );
  }
});
