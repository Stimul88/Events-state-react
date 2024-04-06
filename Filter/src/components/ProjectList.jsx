import React from "react";
import "../App.css";
import { v4 as uuidv4 } from 'uuid';

const ProjectList = ({ projectItem }) => {
  return (
    <div className="containerCards">
      {projectItem.map(({ img, category }) => (
        <img src={img} alt={category}
             key={uuidv4()}/>
      ))}
    </div>
  );
};

export default ProjectList;