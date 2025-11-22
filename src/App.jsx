import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />

      <main className="pt-16">
        <section id="home" className="border-b border-slate-800">
          <Hero />
        </section>

        <section id="about" className="border-b border-slate-800">
          <About />
        </section>

        <section id="projects" className="border-b border-slate-800">
          <Projects />
        </section>

        <section id="skills" className="border-b border-slate-800">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
