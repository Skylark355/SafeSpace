import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Report from "../../Components/Report/Report"
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import Resource from "../../Components/Resources/Resources";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Report />
      <WhoWeAre />
      <Resource />
    </>
  );
}

export default Home;
