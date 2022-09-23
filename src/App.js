import './App.css';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Hero />
      <About />
      <Experience />
      <Skillset />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
