import React from "react";
import CursorEffect from "./components/CursorEffect";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Trial from "./components/Trial";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="font-Poppins">
      <CursorEffect />
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Blog />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
