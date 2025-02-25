import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Report from "../../Components/Report/Report"
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import Resource from "../../Components/Resources/Resources";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Report />
      <WhoWeAre />
      <Resource />
      <Footer />
    </>
  );
}

export default Home;
