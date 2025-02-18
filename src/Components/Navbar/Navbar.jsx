import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">SafeSpace</h1>
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#Report"
          onClick={() => setMenu("report")}
          className={menu === "report" ? "active" : ""}
        >
          Report
        </a>

        <a
          href="#who-we-are"
          onClick={() => setMenu("who-we-are")}
          className={menu === "who-we-are" ? "active" : ""}
        >
          Who We Are
        </a>

        <a
          href="#resources"
          onClick={() => setMenu("resources")}
          className={menu === "resources" ? "active" : ""}
        >
          Resources
        </a>
      </ul>

      <div className="navbar-cta">
        <button className="emergency-contact">0200001020</button>
      </div>
    </div>
  );
}
export default Navbar;
