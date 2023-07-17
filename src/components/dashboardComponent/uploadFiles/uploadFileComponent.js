import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import UploadFile from "./uploadFile";
import UploadFileTable from "./uploadFileTable";

function UploadFileComponent() {
  const data = [
    {
      filename: "Nelsa web developement",
      uploadedBy: "Om prakash sao",
      status: 3,
      statusColor: "#1A932E",
      progress: 100
    },
    {
      filename: "Datascale AI app ",
      uploadedBy: "Neilsan mando",
      status: 0,
      statusColor: "#E5AE21",
      progress: 35
    },
    {
      filename: "Media channel branding",
      uploadedBy: "Tiruvelly priya",
      status: 2,
      statusColor: "#EE201C",
      progress: 68
    },
    {
      filename: "Corlax iOS app develpoement",
      uploadedBy: "Matte hannery",
      status: 3,
      statusColor: "#1A932E",
      progress: 100
    },
    {
      filename: "Website builder developement",
      uploadedBy: "Sukumar rao",
      status: 1,
      statusColor: "#E65F2B",
      progress: 50
    },
  ]
  const [files, setFiles] = useState(data)
  console.log(files)
  return (
    <div>
      <div className="p-[18px] bg-[#ece6e6] bg-opacity-30 rounded-xl">
        <div className="flex justify-between">
          <label className="main-title">Upload File</label>
          <UploadFile setFiles={setFiles} files={files}/>
        </div>
          <UploadFileTable files={files}/>
      </div>
    </div>
  );
}

export default UploadFileComponent;
