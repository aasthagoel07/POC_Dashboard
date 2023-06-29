import React from "react";
import "../assets/css/loader.css";

function loader() {
  return (
    <div className="flex justify-center items-center h-[75vh]">

<div className="pyramid-loader">
  <div className="wrapperr">
    <span className="side side1"></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>  
</div>
    </div>
  );
}

export default loader;
