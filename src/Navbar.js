import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <ul className="navigation-items">
        <a>
          {" "}
          <li className="navigation-item">Lisbon</li>
        </a>
        <li className="navigation-item">Paris</li>
        <li className="navigation-item">Sydney</li>
        <li className="navigation-item">San Francisco</li>
      </ul>
    </header>
  );
}
