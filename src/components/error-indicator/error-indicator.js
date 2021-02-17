import React from "react";
import "./error-indicator.css";
import icon from "./death-star-icon-8-256.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} className="error-img" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
