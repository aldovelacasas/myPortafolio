import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import "./App.css"


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font relative">
      {/* Círculo blanco al pasar el ratón */}
      <div className="circle fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-20 h-20 rounded-full opacity-0 hover:opacity-70 transition duration-300 pointer-events-none"></div>

      {/* Resto del contenido de la aplicación */}

      {/* Contenido de la aplicación */}
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}