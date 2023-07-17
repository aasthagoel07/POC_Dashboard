import React from "react";
import { BsArrowDownRight, BsArrowUpRight, BsBarChart } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

function TopData() {
  return (
    <div className=" ">
      <div className="top-Data-header-main">
        <div className="top-Data-header-sections">
          <div className="bg-[#D398E7] top-Data-header-icon-div">
            <BsBarChart className=" top-Data-header-icon" />
          </div>
          <div className=" top-Data-header-title">
            Savings in Underwriting till now
          </div>
          <div className="top-Data-header-number-div">$53,00989</div>
          <div className="top-Data-header-detail-div">
            <BsArrowUpRight className=" text-[#1A932E]" />
            <p className="">12% increase from last month</p>
          </div>
        </div>
        <div className="top-Data-header-sections">
          <div className="bg-[#E89271] top-Data-header-icon-div">
            <PiSuitcaseSimple className=" top-Data-header-icon" />
          </div>
          <div className=" top-Data-header-title">Processing Delays</div>
          <div className="top-Data-header-number-div">
            95 <span className="">/100</span>{" "}
          </div>
          <div className="top-Data-header-detail-div">
            <BsArrowDownRight className=" text-[#EE201C]" />
            <p className="">10% decrease from last month</p>
          </div>
        </div>
        <div className="top-Data-header-sections">
          <div className="bg-[#70A1E5] top-Data-header-icon-div">
            <AiOutlineClockCircle className=" top-Data-header-icon" />
          </div>
          <div className=" top-Data-header-title">Time spent by Bots</div>
          <div className="top-Data-header-number-div">
            1022 <span className="">/1300 Hrs</span>{" "}
          </div>
          <div className="top-Data-header-detail-div">
            <BsArrowUpRight className=" text-[#1A932E]" />
            <p className="">8% increase from last month</p>
          </div>
        </div>
        <div className="top-Data-header-sections">
          <div className="bg-[#F0C274] top-Data-header-icon-div">
            <AiOutlineUser className=" top-Data-header-icon" />
          </div>
          <div className=" top-Data-header-title">Resources Utilizarion</div>
          <div className="top-Data-header-number-div">
            101 <span className="">/120</span>{" "}
          </div>
          <div className="top-Data-header-detail-div">
            <BsArrowUpRight className=" text-[#1A932E]" />
            <p className="">2% increase from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopData;
