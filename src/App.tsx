import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Academics from "./components/Academics";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Academics />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
