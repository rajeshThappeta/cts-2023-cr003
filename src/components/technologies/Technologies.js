import React from "react";
import "./Technologies.css";
import { Link, Outlet } from "react-router-dom";

function Technologies() {
  return (
    <div>
      <p className="display-1 text-center text-primary">Technologies</p>
      {/* Link to children */}
      <ul className="nav justify-content-center">
        {/* link for Home */}
        <li className="nav-item">
          <Link className="nav-link " to="java">
            Java
          </Link>
        </li>
        {/* link for Register */}
        <li className="nav-item">
          <Link className="nav-link " to="nodejs">
            Nodejs
          </Link>
        </li>
        {/* link for Login */}
        <li className="nav-item">
          <Link className="nav-link " to="vue">
            Vue
          </Link>
        </li>
        {/* link for Technologies */}
      </ul>

      <Outlet />
    </div>
  );
}

export default Technologies;
