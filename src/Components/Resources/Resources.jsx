import "./Resources.css";
import { resources } from "../../../Constants";
import { Link } from "react-router-dom";

function Resource() {
  return (
    <div className="resources" id="resources">
      <div className="resource-contents">
        <div className="resources-top">
          <h1>Resources</h1>
          <p>
          Explore a collection of valuable materials designed  to inform, support and empower you.
          </p>
        </div>

        <div className="resources-content">
          {resources.map((resources, id) => {
            return(
              <div key={id} className="resource-cards">
                <div className="resource-card">
                  <Link to = {resources.link}>
                  <img src={resources.image} alt="" />
                  </Link>
                  <h2>{resources.title}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Resource;
