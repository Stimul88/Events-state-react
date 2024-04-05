import React from "react";
import "../App.css";
const ProjectList = ({ projectItem }) => {
  return (
    <div className="containerCards">
      {projectItem.map(({ img, category }) => (
        <img src={img} alt={category} />
      ))}
    </div>
  );
};

export default ProjectList;