import "./WhoWeAre.css";
import whoweare from "../../assets/whoweare.png"

function WhoWeAre() {
  return (
    <div className="who-we-are" id="who-we-are">
      <div className="who-we-are-contents">
        <div className="who-we-are-top">
          {/* <h1>who we are</h1> */}
        </div>

        <div className="who-we-are-content">
          <div className="who-we-are-left">
          <h1>who we are</h1>
            <p>
              Safe Space is a secure and confidential platform designed to
              support individuals affected by gender-based violence and
              harassment. We provide a safe and anonymous way to report
              incidents, access resources, and seek professional guidance. Our
              mission is to empower survivors, foster awareness, and drive
              meaningful change by bridging the gap between victims and the
              support they need.
            </p>
          </div>

          <div className="who-we-are-right">
            <img src={whoweare} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
