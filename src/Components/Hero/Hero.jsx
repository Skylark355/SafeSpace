import { useState, useEffect } from "react";
import "./Hero.css";
import HeroImage1 from "../../assets/HeroImage1.png";
import HeroImage2 from "../../assets/HeroImage2.png";
import HeroImage3 from "../../assets/HeroImage3.png";

const heroData = [
  {
    image: HeroImage1,
    title: "Your Voice, Your Space, Speak Freely!",
    description:
      "Report Gender-Based Violence Anonymously & Find Support Now",
  },
  {
    image: HeroImage2,
    title: "Welcome Home!",
    description: "No Judgement, Just Understanding",
  },
  {
    image: HeroImage3,
    title: "Empathy First",
    description: "A Safe Space For All",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroData[index].image})` }}
    >
      <div className="hero-contents">
        <h1>{heroData[index].title}</h1>
        <p>{heroData[index].description}</p>
      </div>
    </div>
  );
}

export default Hero;
