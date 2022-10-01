import "./Styles.css"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skill from "./components/Skill"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skill" element={<Skill />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;