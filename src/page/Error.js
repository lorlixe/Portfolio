import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../Style/Erreur.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      navigate("/");
    }
  }, [isOpen, navigate]);

  function click() {
    setIsOpen(isOpen ? false : true);
  }
  return (
    <div>
      <Navigation />
      <div className="erreur">
        <h1> Cette page n'existe pas</h1>
        <button className="btn-contact" onClick={click}>
          Acceuil
        </button>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Error;
