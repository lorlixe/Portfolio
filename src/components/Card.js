import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="Card">
        <div>
          {/* <h3>Kasa</h3> */}
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
        <img
          className="image-projet"
          src={props.info.Photo}
          alt={props.info.Nom}
        />
      </div>
    </div>
  );
};

export default Card;
