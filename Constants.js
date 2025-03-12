import sexual from "./src/assets/sexual.png";
import verbal from "./src/assets/verbal.png";
import stalking from "./src/assets/stalking.png";
import selfdefence from "./src/assets/selfdefense.png";
import legalAid from "./src/assets/legalAid.png";
import survivalSupport from "./src/assets/survivalSupport.png";
import { href } from "react-router-dom";

export const cards = [
  {
    id: 1,
    image: verbal,
    title: "Verbal Harrasment",
  },

  {
    id: 2,
    image: stalking,
    title: "Stalking",
  },

  {
    id: 3,
    image: sexual,
    title: "Sexual Harrasment",
  },
];

export const resources = [
  {
    id: 1,
    image: legalAid,
    title: "LEGALAID",
    link: "/LegalAid",
  },

  {
    id: 1,
    image: survivalSupport,
    title: "survival support",
    link: "/SurvivalSupport",
  },

  {
    id: 3,
    image: selfdefence,
    title: "self defense",
    link: "/SelfDefence",
  },
];
