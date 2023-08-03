import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import UploadFile from "./uploadFile";
import UploadFileTable from "./uploadFileTable";

function UploadFileComponent({data}) {
  
  const [files, setFiles] = useState(data)
  return (
    <div>
      <div className="p-[18px] bg-[#F9F7F7] rounded-xl">
        <div className="flex justify-between">
          <label className="main-title ">Upload File</label>
          <UploadFile setFiles={setFiles} files={files}/>
        </div>
          <UploadFileTable files={files}/>
      </div>
    </div>
  );
}

export default UploadFileComponent;
