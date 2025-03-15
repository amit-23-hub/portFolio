import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import Particle from "./components/Particle";
import Topbar from "./components/bottomBar";
import TestiMonial from "./components/testemonial";
import Exp from "./components/Organisation/EventContent/Exp";
import Timeline from "./components/Timeline/timeline";


function App() {
  return (
    <div>
      <NavBar />
      <Topbar/>
      <Particle/>
      <Home />
      <About />
      <Timeline/>
      <Portfolio />
      <Experience />
      {/* <TestiMonial/> */}
      <Contact />
      <Footer />
      <SocialLinks />
      
    </div>
  );
}

export default App;
