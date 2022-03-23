import React from "react";
import ReactDOM from "react-dom";
import Books from "./books/Books";
// import CountryInfo from "./ajax/CountryInfo";
import "./index.css";
 

ReactDOM.render( 
  <React.StrictMode>
     <Books />
  </React.StrictMode>,
  document.getElementById("root")
);

// <Table number = {15} length = {20} />