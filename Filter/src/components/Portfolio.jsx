import React, { useState } from "react";
import data from "./data/data.js";
import {Toolbar} from "./Toolbar.jsx";
import ProjectList from "./ProjectList.jsx";

export const Portfolio = () => {
  const [selected, setSelected] = useState("All");

  const rendering =
    selected === "All"
      ? data
      : data.filter(({ category }) => category === selected);


  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => {setSelected(filter);}}/>
      <ProjectList
        projectItem={rendering}
      />
    </>
  )
}
