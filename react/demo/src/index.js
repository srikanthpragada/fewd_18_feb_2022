import React from "react";
import ReactDOM from "react-dom";
// import Discount from "./basics/Discount2";
import Table from "./basics/Table";
// import Contacts from "./basics/Contacts";
// import Discount from "./basics/Discount2";
// import Discount from "./basics/Discount";
// import DiscountObject from "./basics/DiscountObject";
import "./index.css";
//import Counter from "./basics/Counter";
  
 
 
ReactDOM.render( 
  <React.StrictMode>
       <Table number="15" length = "5" />
  </React.StrictMode>,
  document.getElementById("root")
);
