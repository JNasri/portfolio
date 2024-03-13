import { useEffect } from "react";
import { useLanguage } from "./context/LanguageContext";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  // enable the animation on scroll library
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // call the language context to use it
  const { lang } = useLanguage();

  return (
    <div className="App" data-aos-duration="700">
      <Navbar />
      <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
        <Profile lang={lang} />
        <div className="bg-white pt-4">
          <Experience lang={lang} />
        </div>
        <Education lang={lang} />
        <div className="bg-white">
          <Projects lang={lang} />
        </div>
        <Skills lang={lang} />
        <div className="bg-white">
          <Contact lang={lang} />
        </div>
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
