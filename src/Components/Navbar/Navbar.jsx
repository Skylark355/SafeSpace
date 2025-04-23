import "./Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import phone1 from "../../assets/phone1.png";
import logoTop from "../../assets/logoTop.png";
import logoTop1 from "../../assets/logoTop1.png"

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
       <Link to="/">
      <div className="logo">
       
          <img src={logoTop} alt="" className="new-logo" />
          <h2 className="logo-title">SafeSpace</h2>
        
      </div>
      </Link>

      <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
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
        {/* <FontAwesomeIcon icon={faPhone} className="icon" /> */}
        {/* <img src={emergency} alt="" className="beeping-image" /> */}
        <div className="navbar-image">
          <img src={phone1} alt="" />
        </div>

        <div className="emergency-contact">
          <p>Need help? Call</p>
          <a href="tel:0200001020">
            <span>0200001020</span>
          </a>
        </div>
      </div>

      <div className="hamburger" onClick={toogleMenu}>
        <FaBars />
      </div>
    </div>
  );
}
export default Navbar;
