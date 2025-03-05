import { cards } from "../../../Constants";
import "./Report.css";

function Report() {
  return (
    <div className="report" id="report">
      <div className="report-contents">
        <div className="report-content">
          <h1>ADDRESSING CONCERNS</h1>
          <p>
            a family of care, where every heart is valued, safe space matter
          </p>
        </div>

        <div className="card">
          {cards.map((cards, id) => {
            return (
              <div key={id} className="report-cards">
                <div className="report-card">
                  <img src={cards.imgae} alt="" />
                  <h2>{cards.title}</h2>
                </div>
              </div>
            );
          })}
        </div>

        <a href="https://forms.gle/fFbJFATLoGFD3G8G9" target="_blank">
          <button className="report-cta">Report</button>
        </a>
      </div>
    </div>
  );
}

export default Report;
