import React from "react";

export default function IconSwitch ({icon, onSwitch}) {
  return (
    <span
      className="material-icons icon"
      onClick={() => onSwitch(icon === "view_module" ? "view_list" : "view_module")}>
      {icon}
    </span>
  )
}