import "./Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import x from "../../assets/x.png";
import globe from "../../assets/globe.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>SafeSpace</h1>
          <div className="socials">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

        <div className="footer-item">
          <h3>Links</h3>

          <Link to="/">
            <p>Home</p>
          </Link>

          <a href="#report">
            <p>Report</p>
          </a>

          <a href="#who-we-are">
            <p>Who we are</p>
          </a>
          <a href="#resources">
            <p>Resources</p>
          </a>
        </div>

        <div className="footer-item">
          <h3>Resources</h3>

          <Link to="/legalAid">
            <p>Legal Aid</p>
          </Link>

          <Link to="/survivalSupport">
            <p>Survival Support</p>
          </Link>

          <Link to="/selfDefence">
            <p>Self Defense</p>
          </Link>
        </div>

        <div className="footer-item1">
          <div className="item">
            <img src={phone} alt="" />
            <p>0200001020</p>
          </div>

          <div className="item">
            <img src={mail} alt="" />
            <p>safespace@gmail.com</p>
          </div>

          <div className="item">
            <img src={globe} alt="" />
            <p>www.safespace.com.gh</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright {String.fromCharCode(169)} 2025 SafeSpace.</p>
      </div>
    </div>
  );
}

export default Footer;
