import "./App.css";
import Navbar from "./components/navbar";
import EleComp from "./components/elecomp";
import CardReel from "./components/cardReel";
import FiftyCard from "./components/fiftyCard";
import OurHotels from "./components/ourHotels";
import WorldOf from "./components/worldOf";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-black overflow-hidden font-serif">
      <Navbar />
      <EleComp />
      <CardReel />
      <FiftyCard />
      <OurHotels />
      <WorldOf />
      <Footer />
    </div>
  );
}

export default App;
