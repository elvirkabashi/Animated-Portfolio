import "./app.scss";
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from "./components/parallax/Parallax";

function App() {

  return (
    <>
    <section id="Homepage" className="section">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services" className="section"><Parallax type="services"/></section>
    <section id="Portfolio" className="section"><Parallax type="portfolio"/></section>
    </>
  )
}

export default App
