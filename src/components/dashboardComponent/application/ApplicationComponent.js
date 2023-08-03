import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ApplicationTable from "./ApplicationTable";

function ApplicationComponent({ files, uploadFileHandler }) {
  const [data, setdata] = useState(files);
  const [applicationName, setapplicationName] = useState("");
  const onSubmit = () => {
    const update = [{
      id: data.length + 1,
      applicationName: applicationName,
      clientName: "Om prakash sao",
      date: "Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)",
      noOfFiles: 2,
    }];
    
    setdata(data.concat(update))
  };
  return (
    <div>
      <div className="p-[18px] bg-[#F9F7F7] rounded-xl">
        <div className="flex justify-between">
          <label className="main-title ">Applications</label>
          <div className="flex w-1/2 gap-2.5 ">
            <input
              type="text"
              name="applicationName"
              id="applicationName"
              value={applicationName}
              onChange={(e) => setapplicationName(e.target.value)}
              className="rounded-2xl flex px-5 w-1/2 ml-auto bg-white form-input"
              placeholder="Application Name"
            />
            <button
              onClick={() => onSubmit()}
              className=" rounded-2xl bg-white px-[7px] py-[5px]  flex"
            >
              {" "}
              <span className="flex gap-2.5 whitespace-nowrap m-auto">
                <IoMdAdd className="h-6 w-6 bg-[#E65F2B] text-white p-[5px] rounded-full" />
                Create Application
              </span>
            </button>
          </div>
        </div>
        <ApplicationTable files={data} uploadFileHandler={uploadFileHandler}/>
      </div>
    </div>
  );
}

export default ApplicationComponent;
