import { useState, useEffect } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Preloader from "./components/preloader/Preloader";
import Services from "./components/services/Services";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Cursor />
          <section id="Homepage" className="section">
            <Navbar />
            <Hero />
          </section>
          <section id="Services" className="section">
            <Parallax type="services" />
          </section>
          <section id="servicess">
            <Services />
          </section>
          <section id="Portfolio" className="section">
            <Parallax type="portfolio" />
          </section>
          <Portfolio />
          <section id="Contact">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
