import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      navigate(`/projet/${parseInt(props.info.id)}`);
    }
  }, [isOpen, navigate, props.info.id]);

  function click() {
    setIsOpen(isOpen ? false : true);
  }
  return (
    <div>
      <div className="Card" onClick={click}>
        {props.isHover === props.info.id && (
          <div className="Card-info">
            <h2> {props.info.Nom}</h2>
            <h3> {props.info.Objectif}</h3>
            <p>Langages utilisés :{props.info.Langage}</p>
          </div>
        )}
        <img
          className="image-projet"
          src={props.info.Photo}
          alt={props.info.Nom}
        />

        <div>
          {/* <p>
                Le projet fait partie d'une formation spécialisée dans le
                développement front-end avec React dispensée par OpenClassrooms.
                L'objectif était de développer une application web avec React et
                React Router, en utilisant des maquettes Figma comme base. Des
                données fictives ont été fournies, ainsi que des directives
                techniques pour les galeries d'images, les boutons déroulants et
                la structure globale de l'application (structure logique, un
                composant par fichier, utilisation de props et de states, etc.)
              </p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
