import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (

    <div className="navbar">

      <Link className="home-link" to="/">Google Books Search</Link>

      <Link className="search-link" to="/search">Search</Link>

      <Link className="saved-link" to="/saved">Saved</Link>

    </div>



  );
}

export default Nav;