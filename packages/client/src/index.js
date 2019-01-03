import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const rootNode = document.getElementById("root");
rootNode && ReactDOM.render(<App />, rootNode);
module.hot.accept();
