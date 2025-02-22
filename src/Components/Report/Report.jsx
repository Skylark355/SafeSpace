import { cards } from "../../../Constants";
import "./Report.css";

function Report() {
  return (
    <div className="report" id="report">
      <div className="report-contents">
        <div className="report-content">
          <h1>incident report</h1>
          <p>
            a community of care, where every heart is valued, Your safe space
            matters
          </p>
        </div>

        <div className="card">
          {cards.map((cards, id) => {
            return (
              <div key={id} className="report-cards">
                <div className="report-card">
                  <a href="https://forms.gle/fFbJFATLoGFD3G8G9" target="_blank">
                    {" "}
                    <img src={cards.imgae} alt="" />
                    <h2>{cards.title}</h2>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <button className="report-cta">More</button>
      </div>
    </div>
  );
}

export default Report;
