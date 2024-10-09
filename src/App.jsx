import './App.module.css';
import { Experience } from './Components/Experience/Experience';
import { Navbar } from './Components/Header/Navbar';
import Hero from './Components/Hero/Hero';
import { Skills } from './Components/Skills/Skills';
import { ContactSection } from './Components/ContactSection/ContactSection';
import { Footer } from './Components/Footer/Footer';
import { AboutMe } from './Components/AboutMe/AboutMe';
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Experience/>
    <AboutMe/>
    <ContactSection/>
    <Footer/>
    </>
  );
}

export default App;
