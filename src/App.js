import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
