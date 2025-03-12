import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import LegalAid from "./Pages/ResourcesPage/LegalAid/LegalAid";
import { Route, Routes } from "react-router-dom";
import SelfDefense from "./Pages/ResourcesPage/SelfDefence/SelfDefense";
import SurvivalSupport from "./Pages/ResourcesPage/SurvivalSupport/SurvivalSupport";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LegalAid" element={<LegalAid />} />
        <Route path="/SurvivalSupport" element={<SurvivalSupport />} />
        <Route path="/SelfDefence" element={<SelfDefense />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
