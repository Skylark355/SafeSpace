import { useState, useEffect } from "react";
import "./Hero.css";
import HeroImage1 from "../../assets/HeroImage1.png"
import HeroImage2 from "../../assets/HeroImage2.png"
import HeroImage3 from "../../assets/HeroImage3.png"


const heroData = [
  {
    image: HeroImage1,
    title: "Your Voice, Your Space, Speak Freely!",
    description:
      "Join a community that supports and protects your rights to express yourself without fear of judgement or discrimination",
  },
  {
    image: HeroImage2,
    title: "Empowering Voices Everywhere",
    description:
      "Be part of a platform that values your thoughts, encourages discussions, and fosters change.",
  },
  {
    image: HeroImage3,
    title: "A Safe Haven for Open Discussions",
    description:
      "Express yourself confidently in a supportive environment that values free speech.",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000); // Change every 5 seconds

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
