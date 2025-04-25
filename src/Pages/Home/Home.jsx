// import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import Hero from "../../Components/Hero/Hero";
import Report from "../../Components/Report/Report";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import Resource from "../../Components/Resources/Resources";


function Home() {
  const location = useLocation();

  return (
    <div key={location.key}>
    <Hero />
    <Report />
    <WhoWeAre />
    <Resource />
  </div>
  );
}

export default Home;
