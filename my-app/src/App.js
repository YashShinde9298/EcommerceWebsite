import BannerSection from './Components/BannerSection';
import Category from './Components/Category';
import FeatureSection from './Components/FeatureSection';
import FeatureSectionBreakfast from './Components/FeatureSectionBreakfast';
import FeatureSectionFruits from './Components/FeatureSectionFruits';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import NewsLetter from './Components/NewsLetter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <BannerSection />
      <NewsLetter />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
