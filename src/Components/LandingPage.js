import CollectSection from "./CollectSection";
import HeroSection from "./HeroSection";
import LearnSection from "./LearnSection";
import NewsSection from "./NewsSection";
import PlaySection from "./PlaySection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <LearnSection />
      <PlaySection />
      <CollectSection />
      <NewsSection />
    </div>
  );
};

export default LandingPage;
