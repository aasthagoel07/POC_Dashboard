import React from "react";
import "../assets/css/loader.css";

function loader() {
  return (
    <div className="flex justify-center items-center h-[75vh]">

<div class="pyramid-loader">
  <div class="wrapperr">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>  
</div>
    </div>
  );
}

export default loader;
