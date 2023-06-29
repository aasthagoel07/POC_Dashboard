import React, { Fragment, useState } from "react";
import "../../assets/css/header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="h-auto sticky top-0 z-50 bg-[#0B4A7B]">
        <div className=" mx-auto px-4 sm:px-6 lg:px-5 min-h-[60px]">
          <div className="flex items-center justify-between min-h-[60px] ">
            <div className="flex items-center my-auto">
              <Link to={"/home"} className="flex-shrink-0   font">
                {/* <img src={img} alt="Workflow" className="w-[75px]" /> */}
               ABC
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
