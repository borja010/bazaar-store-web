import React from "react";
import "./loader.scss";

function Loader() {
  return (
    <div className="overlay">
      <div className="loader">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
      </div>
    </div>
  );
}

export default Loader;