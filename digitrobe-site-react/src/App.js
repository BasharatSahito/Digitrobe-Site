import './App.css';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';
import SubscribeSection from './components/SubscribeSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
