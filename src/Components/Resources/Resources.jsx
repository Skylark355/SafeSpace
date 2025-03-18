import "./Resources.css";
import { resources } from "../../../Constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Resource() {
  return (
    <div className="resources" id="resources">
      <div className="resource-contents">
        <div className="resources-top">
          <h1>Resources</h1>
          <p>
            Explore a collection of valuable materials designed to inform, support, and empower you.
          </p>
        </div>

        <div className="resources-content">
          {resources.map((resource, id) => (
            <div key={id} className="resource-cards">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ResourceCard = ({ resource }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="resource-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={resource.link} className="image-container">
        <img src={isHovered ? resource.hoverImage : resource.image} alt="" />
        {isHovered && (
          <div className="arrow-overlay">
            <FaArrowRight className="arrow-icon" />
          </div>
        )}
      </Link>
      <h2>{resource.title}</h2>
    </div>
  );
};

export default Resource;
