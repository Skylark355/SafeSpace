import React from "react";
import "./SurvivalSupport.css";

const SurvivalSupport = () => {
  return (
    <div className="survival">
    <div className="survival-top">
      <h1>Survival Support</h1>
    </div>

    <div className="survival-bottom">
      <h1>documents on Survival Support </h1>
      <div className="content">
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

      <div className="content">
        <a href="https://www.arkfoundationghana.org/cms/" target="_blank">
          <h2>The Ark Foundation:</h2>
          <p>
            Focuses on promoting women's rights and providing support services
            for survivors of violence through counseling, legal assistance,
            and advocacy.
          </p>
        </a>
      </div>

      <div className="content">
        <a href="https://safehaven-foundation.org/" target="_blank">
          <h2>Safe Haven Foundation</h2>
          <p>
            Provides shelter and support for survivors of domestic violence,
            along with counseling and rehabilitation services.
          </p>
        </a>
      </div>
    </div>
  </div>
  );
};

export default SurvivalSupport;
