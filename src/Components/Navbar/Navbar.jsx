import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">SafeSpace</h1>
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navbar Menu */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#report"
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
