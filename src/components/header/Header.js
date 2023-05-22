import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <ul className="nav justify-content-center">
      {/* link for Home */}
      <li className="nav-item">
        <Link className="nav-link " to="/">
          Home
        </Link>
      </li>
       {/* link for Register */}
      <li className="nav-item">
        <Link className="nav-link " to="register">
          Register
        </Link>
      </li>
       {/* link for Login */}
      <li className="nav-item">
        <Link className="nav-link " to="login">
          Login
        </Link>
      </li>
       {/* link for Technologies */}
      <li className="nav-item">
        <Link className="nav-link " to="technologies">
          Technologies
        </Link>
      </li>
    </ul>
  );
}

export default Header;
