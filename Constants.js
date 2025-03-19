import sexual from "./src/assets/sexual.png";
import verbal from "./src/assets/verbal.png";
import stalking from "./src/assets/stalking.png";
import physicalAbuse from "./src/assets/physicalAbuse.jpg";

import selfdefence from "./src/assets/selfdefense.png";
import legalAid from "./src/assets/legalAid.png";
import survivalSupport from "./src/assets/survivalSupport.png";
import legalAid2 from "./src/assets/legalAid2.png";
import selfdefence2 from "./src/assets/selfdefense2.png";
import survivalSupport2 from "./src/assets/survivalSupport2.png";

export const cards = [
  {
    id: 1,
    image: physicalAbuse,
    title: "Physical Abuse",
  },

  {
    id: 2,
    image: stalking,
    title: "Stalking",
  },

  {
    id: 3,
    image: verbal,
    title: "Verbal Harrasment",
  },

  {
    id: 4,
    image: sexual,
    title: "Sexual Harrasment",
  },
];

export const resources = [
  {
    id: 1,
    image: legalAid,
    hoverImage: legalAid2, // Add hover image
    title: "LEGALAID",
    link: "/LegalAid",
  },
  {
    id: 2,
    image: survivalSupport,
    hoverImage: survivalSupport2, // Add hover image
    title: "SURVIVAL SUPPORT",
    link: "/SurvivalSupport",
  },
  {
    id: 3,
    image: selfdefence,
    hoverImage: selfdefence2, // Add hover image
    title: "SELF DEFENSE",
    link: "/SelfDefence",
  },
];
