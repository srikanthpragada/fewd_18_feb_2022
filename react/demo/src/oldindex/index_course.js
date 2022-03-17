import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Welcome from './basics/welcome'
//import Greet from './basics/Greet'
import Course from "./basics/Course";
  
 
var courseDetails = {
  title: "Front-end Web Developer",
  duration: 35,
  fee: 5000,
  topics: ["HTML", "CSS", "BS", "JS", "jQuery", "React"],
};
 
ReactDOM.render( 
  <React.StrictMode>
    <Course course={courseDetails} trainer="Srikanth Pragada" />
  </React.StrictMode>,
  document.getElementById("root")
);
