import React from "react";
import "../Style/Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <NavLink to="/confidentialite" className="link">
          <li>Politique de Confidentialité</li>
        </NavLink>
        <li>
          <a
            href="https://github.com/lorlixe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FontAwesomeIcon icon="fa-brands fa-square-github" />
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/marine-k-54a383126/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
