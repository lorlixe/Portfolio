import React from "react";
import "../Style/Navigation.css";

const navigation = () => {
  return (
    <div className="nav-bar">
      <div className="navigation">
        <div className="presentation">
          <h1>Marine Kouadio</h1>
          <h2>DÉVELOPPEUSE WEB</h2>
        </div>
        <div>
          <ul className="navigation-option">
            <li>Acceuil</li>
            <li>Cv</li>
            <button className="btn-contact">
              <span>👤</span> Contact
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navigation;
