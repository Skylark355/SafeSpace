import "./Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import emergency from "../../assets/emergency.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import phone1 from "../../assets/phone1.png";

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
        {/* <FontAwesomeIcon icon={faPhone} className="icon" /> */}
        {/* <img src={emergency} alt="" className="beeping-image" /> */}
        <div className="navbar-image">
          <img src={phone1} alt="" />
        </div>

        <div className="emergency-contact">
          <p>Emergency Number</p>
          <span>0200001020</span>
        </div>

      </div>

      <div className="hamburger" onClick={toogleMenu}>
        <FaBars />
      </div>
    </div>
  );
}
export default Navbar;
