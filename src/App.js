import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  );
}

export default App;
