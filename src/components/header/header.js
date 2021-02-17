import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>SWapi DB</h1>
      <ul className="nav nav-pills">
        <li className="nav-item">People</li>
        <li className="nav-item">Planets</li>
        <li className="nav-item">Starships</li>
      </ul>
    </div>
  );
};
export default Header;
