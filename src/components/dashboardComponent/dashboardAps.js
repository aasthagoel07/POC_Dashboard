import React, { useState } from "react";
import "../../assets/css/dashboard.css";
import TopData from "./topDataHeader";
import UploadFileComponent from "./uploadFiles/uploadFileComponent";
import SummaryProgressTable from "./summaryProgressTable";

import { DateCalendar } from "@mui/material";
import ApplicationComponent from "./application/ApplicationComponent";

const uploadData = [
  {
    filename: "Nelsa web developement",
    uploadedBy: "Om prakash sao",
    status: 3,
    statusColor: "#1A932E",
    duedate: "Thu May 25 2023 18:36:49 GMT+0530 (India Standard Time)",
    progress: 100,
  },
  {
    filename: "Datascale AI app ",
    uploadedBy: "Neilsan mando",
    status: 0,
    statusColor: "#E5AE21",
    duedate: "Tue Jun 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 35,
  },
  {
    filename: "Media channel branding",
    uploadedBy: "Tiruvelly priya",
    status: 2,
    statusColor: "#EE201C",
    duedate: "Thu Jul 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 68,
  },
  {
    filename: "Corlax iOS app develpoement",
    uploadedBy: "Matte hannery",
    status: 3,
    statusColor: "#1A932E",
    duedate: "Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 100,
  },
  {
    filename: "Website builder developement",
    uploadedBy: "Sukumar rao",
    status: 1,
    statusColor: "#E65F2B",
    duedate: "Wed Mar 15 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 50,
  },
];

const applicationData = [
  {
    id: 1,
    applicationName: "Nelsa web developement",
    clientName: "Om prakash sao",
    date: "Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    noOfFiles: 2,
  },
  {
    id: 2,
    applicationName: "Datascale AI app ",
    clientName: "Neilsan mando",
    date: "Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    noOfFiles: 3,
  },
];
function DashboardAps() {
  const [data, setdata] = useState([]);

  const uploadFileHandler = (id) => {
    if(id){
      setdata(uploadData)
    }
  };
  return (
    <div>
      <div className="">
        <div className="top-head-title">
          <label className="main-title">APS (Summarize)</label>
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
        <div>
          <TopData />
        </div>
        <div>
          <ApplicationComponent
            files={applicationData}
            uploadFileHandler={uploadFileHandler}
          />
        </div>
        {data?.length> 0 &&
        <div className="mt-6">
          <UploadFileComponent data={data} />
          {/* <SummaryProgressTable files={data}/> */}
        </div>
        }
      </div>
    </div>
  );
}

export default DashboardAps;
