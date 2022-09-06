import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {

  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const handleClick = (e) => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className={props.theme ? "dark top-nav" : "top-nav"}>
      <div className="navItems">
        <Link to="/">Gabriel Monge</Link>
        <div className="toggler">
          <div className="toggler--slider" onClick={props.changeTheme}>
            <div className="toggler--slider--circle"></div>
          </div>
        </div>
      </div>
      <input id="menu-toggle" type="checkbox" checked={isNavOpen} />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" onClick={handleClick}></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/about" onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleClick}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
