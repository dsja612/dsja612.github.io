import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from './components/Experience';
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience />
      {/* <Projects />
      <Skills />
      <Testimonials />
      <Contact /> */}
    </main>
  );
}

export default App;
