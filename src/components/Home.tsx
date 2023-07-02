import Navbar from "./Navbar";
import AboutMe from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Academics from "./Academics";

function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="aboutus">
      <Navbar />
      <AboutMe />
      <Academics />
      <Experience />
      <Projects />
    </main>
  );
}

export default Home;
