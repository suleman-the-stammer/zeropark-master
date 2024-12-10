import React from "react";
import "./Tooltip.scss"; // Adjust the path as needed

const Tooltip = ({ children, city, country }) => (
  <div className="tooltip-wrapper">
    {children}
    <div className="tooltip">
      <div className="upper">{city}</div>
      <div className="bottom">{country}</div>
    </div>
  </div>
);

export default Tooltip;
