import React from "react";
import "./Navbar.css";
import logo from "./Ericzanderlogo3.jpeg";
import { Link } from "react-router-dom";

const navbar = () => (
  <header>
    <nav>
      <div>
        <img className="logo" src={logo} alt="Ericzander guitars badge" />
      </div>
      <div className="listItems">
        <ul>
          <li className="navitem">
            <Link to="/">Home</Link>
          </li>
          <li className="navitem">
            <Link to="/Guitars">Guitars</Link>
          </li>
          <li className="navitem">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
