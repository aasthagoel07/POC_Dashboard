import React from "react";
import url from "../../../assets/pdf/dummy.pdf";

function SummaryPage() {
  return (
    <div className="h-full">
      <div className="top-head-title">
        <label className="main-title">Summary</label>{" "}
        <div>
          <select
            name="days"
            id="days"
            className="text-sm min-w-[112px] form-select"
          >
            <option value="30days">Last 30 Days</option>
            <option value="60days">Last 60 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
        </div>
      </div>
      <div className="bg-[#F4F4F4] p-4 h-full rounded-2xl grid grid-cols-2 gap-[18px]">
        <div className="bg-[#DEDEDE] p-[18px] rounded-2xl">
          <label className="mb-2.5">Uploaded PDF</label>
          <object
            data={`${url + "#toolbar=0&navpanes=0"} `}
            type="application/pdf"
            width="100%"
            className="h-[75vh]"
          />
        </div>
        <div className="bg-white bg-opacity-30 p-[18px] rounded-2xl">
          <label className="mb-2.5 text-base">Summarized Text</label>
          <p className="text-sm">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
