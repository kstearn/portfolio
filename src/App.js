import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import AboutMe from './routes/AboutMe';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Skills />} path="/skills" />
      <Route element={<Projects />} path="/projects" />
      <Route element={<AboutMe />} path="/aboutme" />
    </Routes>
  );
}

export default App;
