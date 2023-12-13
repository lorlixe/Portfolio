import React from "react";
import "../Style/Navigation.css";
import { NavLink } from "react-router-dom";
import Cv from "../Cv/CV-20-10-2023.pdf";
import ContactBtn from "./ContactBtn";

const navigation = () => {
  return (
    <div className="nav-bar">
      <div className="navigation">
        <div className="presentation">
          <NavLink to="/" className="link">
            <h1>Marine Kouadio</h1>
            <h2>DÉVELOPPEUSE WEB</h2>
          </NavLink>
        </div>
        <div>
          <ul className="navigation-option">
            <NavLink to="/" className="link">
              <li>Accueil</li>
            </NavLink>
            <a
              href={Cv}
              className="link"
              download="MarineCv"
              target="_blank"
              rel="noreferrer"
            >
              <li>Cv</li>
            </a>
            <ContactBtn />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navigation;
