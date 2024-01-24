import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';

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
          <Route path="/skills" exact element={<Home/>} />
          <Route path="/projects" exact element={<Home />} />
          <Route path="/certificates" exact element={<Home />} />
        </Routes>
      <footer>
        <Footer/>
      </footer>
      </main>
    </>
  );
}

export default App;
