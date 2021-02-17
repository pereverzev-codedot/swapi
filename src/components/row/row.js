import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import "./row.css";

const Row = ({ left, right }) => {
  return (
    <ErrorBoundry>
      <div className="main-section">
        <ErrorBoundry>{left} </ErrorBoundry>{" "}
        <ErrorBoundry> {right}</ErrorBoundry>
      </div>
    </ErrorBoundry>
  );
};

export default Row;
