import "../Style/Profil.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import ContactBtn from "../components/ContactBtn";
import Footer from "../components/Footer";

const Profil = () => {
  const [jsonData, setJsonData] = useState([]);
  const [isHover, setIsHover] = useState(null);

  const handleMouseEnter = (id) => {
    setIsHover(id);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  useEffect(() => {
    const sheetsAPIURL =
      "https://script.google.com/macros/s/AKfycbwxHYfrxxQgDwd3iew3f9STbXdbnateI4SKR98Lj66FQj8IvFJSvujh0TTXW87GeKs/exec";

    axios
      .get(sheetsAPIURL)
      .then((response) => {
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données Google Sheets :",
          error
        );
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="page">
        <div className="profil">
          <div className="profil-text">
            <h1>BONJOUR! Je suis Marine, DÉVELOPPEUSE WEB</h1>
            <p>
              Bonjour et bienvenue sur mon portfolio ! Ici, vous découvrirez une
              collection de projets que j'ai réalisés au cours de ma formation
              ainsi que d'autres créations hors formation. Mon portfolio reflète
              ma passion pour le monde du développement. Explorez et plongez
              dans mon univers créatif
            </p>
            <ContactBtn />
          </div>
          <img className="image-dev" src="../Dev.svg" alt="Developpeuse web" />
        </div>
        <div className="section-logo-titre">
          {/* <div className="about">
            <h3>À propos</h3>
            <p>
              Je suis une développeuse web passionné. Ma formation en
              développement web m'a permis d'acquérir une large gamme de
              compétences :{" "}
            </p>
            <ul>
              <li>
                transformation de maquettes graphiques en sites web responsive,
              </li>
              <li> à la création de sites responsive et dynamiques.</li>
            </ul>
          </div> */}
          <h2>Compétences</h2>
          <div className="section-logo">
            <img className="image-logo" src="../HTML.svg" alt="Logo HTML" />
            <img className="image-logo" src="../Css.svg" alt="Logo Css" />
            <img className="image-logo" src="../Js.svg" alt="Logo Js" />
            <img className="image-logo" src="../Mysql.svg" alt="Logo Mysql" />
            <img className="image-logo" src="../nodejs.svg" alt="Logo nodejs" />
            <img className="image-logo" src="../React.svg" alt="Logo React" />
            <img className="image-logo" src="../sass.svg" alt="Logo sass" />
          </div>
        </div>
        <div className="grille">
          <h2>Projets réalisés</h2>
          <div className="allCard">
            {jsonData.map((i, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(i.id)}
                onMouseLeave={handleMouseLeave}
                key={index}
              >
                <Card info={i} isHover={isHover} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
