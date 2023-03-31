import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import LearnSection from "./Components/LearnSection";
import PlaySection from "./Components/PlaySection";
import CollectSection from "./Components/CollectSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <LearnSection />
      <PlaySection />
      <CollectSection />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
