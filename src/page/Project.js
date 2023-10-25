import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../Style/Project.css";
import Footer from "../components/Footer";

const Project = () => {
  const params = useParams();
  const [OneData, setOneData] = useState("");
  const navigate = useNavigate();
  const projetId = parseInt(params.id);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const sheetsAPIURL =
      "https://script.google.com/macros/s/AKfycbwxHYfrxxQgDwd3iew3f9STbXdbnateI4SKR98Lj66FQj8IvFJSvujh0TTXW87GeKs/exec";

    axios
      .get(sheetsAPIURL)
      .then(({ data }) => {
        const findData = data.find((item) => item.id === projetId);
        console.log(findData);

        if (findData) {
          setOneData(findData);
          setIsEmpty(OneData.Url ? false : true);
        } else {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [navigate, projetId, OneData.Url]);

  return (
    <div>
      <Navigation />
      <div className="description">
        <div>
          <h2 className="project-Name"> {OneData.Nom} </h2>
          <p className="project-Name"> {OneData.Description} </p>
          <p className="project-Name">Langages utilisés : {OneData.Langage}</p>

          <div className="section-button">
            {isEmpty && (
              <a href={OneData.Url} target="_blank" rel="noopener noreferrer">
                <button className="btn">Voir le site</button>
              </a>
            )}

            <a href={OneData.Github} target="_blank" rel="noopener noreferrer">
              <button className="btn">Voir le code</button>
            </a>
          </div>
        </div>
        <img className="image-projet" src={OneData.Photo} alt={OneData.Nom} />{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Project;
