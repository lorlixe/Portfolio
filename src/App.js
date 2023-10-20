import "./Style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./page/Profil";
import Error from "./page/Error";
import Project from "./page/Project";
import Contact from "./page/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route path="*" element={<Error />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/projet/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
