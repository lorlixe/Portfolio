import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../Style/Project.css";

const Project = () => {
  const params = useParams();
  const [OneData, setOneData] = useState("");
  const navigate = useNavigate();
  const projetId = parseInt(params.id);

  useEffect(() => {
    const sheetsAPIURL =
      "https://script.google.com/macros/s/AKfycbwxHYfrxxQgDwd3iew3f9STbXdbnateI4SKR98Lj66FQj8IvFJSvujh0TTXW87GeKs/exec";

    axios
      .get(sheetsAPIURL)
      .then(({ data }) => {
        const findData = data.find((item) => item.id === projetId);
        console.log(findData);
        console.log(typeof projetId);

        if (findData) {
          setOneData(findData);
        } else {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [projetId, navigate]);

  return (
    <div>
      <Navigation />
      <div className="description">
        <div>
          <h2 className="project-Name"> {OneData.Nom} </h2>
          <p className="project-Name"> {OneData.Description} </p>
          <div className="section-button">
            <button className="btn">Voir le site</button>
            <button className="btn">Voir le code</button>
          </div>
        </div>
        <img className="image-projet" src={OneData.Photo} alt={OneData.Nom} />{" "}
      </div>
    </div>
  );
};

export default Project;
