import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {films} from "./mock/films";

ReactDom.render(
  <App movie={films}/>,
  document.getElementById(`root`),
);
