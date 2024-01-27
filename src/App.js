import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/certificates" exact element={<Certificates />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
