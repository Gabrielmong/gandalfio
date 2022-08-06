import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <section className="top-nav">
      <div><a href="/home">Gabriel Monge</a></div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </section>
  );
}
