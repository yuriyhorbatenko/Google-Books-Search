import React from "react";
import "./nav.css";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/" id="home-link">Home <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="/saved" id="saved-link">Saved</a>
          </li>
        </ul>

      </div>
    </nav>

  );
}

export default Nav;