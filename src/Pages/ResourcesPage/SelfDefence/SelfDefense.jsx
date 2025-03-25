import React from "react";
import "./SelfDefense.css";
import Video from "../../../assets/Video.mp4"

const SelfDefense = () => {
  return (
    <div>
      <div className="selfDefence">
        <div className="selfDefence-top">
          <h1>Self Defence</h1>
        </div>

      <div className="video">
        <video width="800" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

          <div className="selfDefence-bottom">
          <h1>some security tips and advice</h1>
          <div className="contentt">
            <ul>
              <li>
                Be conscious of your surroundings, especially in unfamiliar or
                isolated arears.
              </li>
              <li>Avoid risky shortcuts.</li>
              <li>
                Share your live location with trusted contacts when walking
                alone.
              </li>
              <li>
                Have a trusted contact on speed dial for urgent situations.
              </li>
              <li>
                Avoid unfamiliar places at night, if necessary, travel in
                group or use well-it main roads.
              </li>
              <li>
                Carry a personal safety tool items like a whistle, pepper spray
                or a personal alarm can help in emergencies.
              </li>
              <li>
                If a situation feels unsafe, remove yourself as quickly as
                possible.
              </li>
              <li>Report suspicious activities.</li>
              <li>
                Stay informed about the latest security treats and safety
                practices.
              </li>
            </ul>
          </div>

          <div className="contentt">
            <h1>TIPS ON SELF DEFENCE </h1>

            <ul>
              <li>
                Strike the attacker's nose or chin with the base of your palm to
                stun them.
              </li>
              <li>
                Use your elbow to hit their face, ribs or chest when they are.{" "}
              </li>
              <li>
                If grabbed, put your fingers into their eyes to break free.
              </li>
              <li>Yell loudly to attract attention and scare them off.</li>
              <li>
                Always look for an escape for escape and get to safety fast.
              </li>
              <li>Lower your chin to protect your throat.</li>
              <li>
                If trapped , bite the attacker's arm or scratch their eyes or
                face to break free.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfDefense;
