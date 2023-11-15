import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./page/Profil";
import Error from "./page/Error";
import Project from "./page/Project";
import Contact from "./page/Contact";
import Privacy from "./page/Privacy";
import "./Style/App.css";

function App() {
  useEffect(() => {
    const myVar = setTimeout(() => {
      showPage();
    }, 3000);

    return () => clearTimeout(myVar);
  }, []);

  function showPage() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    if (content && loader) {
      loader.style.display = "none";
      content.style.display = "block";
    }
  }

  return (
    <div>
      <div className="loader" id="loader">
        <h1>Bonjour et bienvenue sur mon portfolio </h1>
        <img
          className="lds-circle"
          src="../loader.png"
          alt="Developpeuse web"
        />
      </div>
      <div className="content" id="content" style={{ display: "none" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Profil />} />
            <Route path="*" element={<Error />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projet/:id" element={<Project />} />
            <Route path="/confidentialite" element={<Privacy />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
