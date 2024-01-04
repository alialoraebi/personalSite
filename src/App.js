import './App.css';
import Nav from './components/nav.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
