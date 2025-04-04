import React from "react";
import "./LegalAid.css";
import video from "../../../assets/video.mp4"

const LegalAid = () => {
  return (
    <div className="legalAid" id="legalAid">
      <div className="legalAid-top">
        <h1>Legal Aid</h1>
      </div>

    
      {/* <video width="600" autoPlay loop muted className="video">
        <source src={video} type="video/mp4"  />
      </video> */}
      

      <div className="legalAid-bottom">
        <h1>documents on legal aid </h1>
        <div className="legal-content">
          <a
            href="https://police.gov.gh/en/index.php/domestic-violence-victims-support-unit-dovvsu/#:~:text=DOMESTIC%20VIOLENCE%20AND%20VICTIMS%20SUPPORT%20UNIT%20(DOVVSU)"
            target="_blank"
          >
            <h2>Domestic Violence and Victims Support Unit (DOVVSU)</h2>
            <p>
              A unit of the Ghana Police Service that provides support and
              protection for victims of domestic violence and sexual assault.
            </p>
          </a>
        </div>

        <div className="legal-content">
          <a href="https://www.arkfoundationghana.org/cms/" target="_blank">
            <h2>The Ark Foundation:</h2>{" "}
          </a>
          <p>
            Focuses on promoting women's rights and providing support services
            for survivors of violence through counseling, legal assistance, and
            advocacy.
          </p>
        </div>

        <div className="legal-content">
          <a
            href="https://netrightghana.org/about-us/our-organisation"
            target="_blank"
          >
            <h2>Fida Ghana ( International Federation of Women Lawyers) </h2>
            <p>
              Offers legal aid to women facing domestic violence and harassment,
              advocating for their rights.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalAid;
