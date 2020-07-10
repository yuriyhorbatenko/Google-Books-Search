import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (

    <div className="jumbotron text-center" id="jumbotron">
      <div className="container text-light">

        <p id="header">
          <span id="g1">G</span>
          <span id="o2">o</span>
          <span id="o3">o</span>
          <span id="g4">g</span>
          <span id="l5">l</span>
          <span id="e6">e</span>
          <br></br>
          <span id="b7"> Books Search</span>
        </p>

      </div>
    </div>

  );
}

export default Jumbotron;
