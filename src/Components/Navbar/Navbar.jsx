import "./Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="navbar">
      {/* <Link to="/"> */}
      <a href="#">
        <h1 className="logo">SafeSpace</h1>
      </a>
      {/* </Link> */}

      <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
        <a
          href="#"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </a>

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

      <div className="hamburger" onClick={toogleMenu}>
        <FaBars />
      </div>
    </div>
  );
}
export default Navbar;
