import "./Footer.css";
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import x from "../../assets/x.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">

        <div className="footer-logo">
          <h1>SafeSpace</h1>
        </div>

        <div className="footer-item">
          
            <h3>Links</h3>
          
          <a href="#">
            <p>Home</p>
          </a>
          <a href="#">
            <p>Report</p>
          </a>
          <a href="#">
            <p>Who we are</p>
          </a>
          <a href="#">
            <p>Resources</p>
          </a>
        </div>

        <div className="footer-item">
          
            <h3>Resources</h3>
          
          <a href="#">
            {" "}
            <p>Legal Aid</p>
          </a>
          <a href="#">
            <p>Survival Support</p>
          </a>
          <a href="#">
            <p>Self Defense</p>
          </a>
        </div>

        <div className="footer-item1">
          <div className="item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>0200001020</p>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>safespace@gmail.com</p>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <p>www.safespace.com.gh</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright {String.fromCharCode(169)} 2025 SafeSpace.</p>

        <div className="socials">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={x} alt="" />
        <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
