import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function UploadFile({ setFiles, files }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [value, setvalue] = useState([]);

  const handleUploadFileChange = (e) => {
    e.preventDefault();
    const file = Array.from(e.target.files);

    const data = file.map((item, index) => {
      const random = Math.floor(Math.random() * 4);

      return {
        filename: item.name,
        uploadedBy: files[index]?.uploadedBy,
        status: random,
        statusColor: files.filter((item) => item.status == random)[0]
          ?.statusColor,
        progress: files.filter((item) => item.status == random)[0]?.progress,
      };
    });
    setvalue(value.concat(data));
  };

  const handleDADFileChange = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = Array.from(e.dataTransfer.files);
    const data = file.map((item, index) => {
      const random = Math.floor(Math.random() * 4);

      return {
        filename: item.name,
        uploadedBy: files[index]?.uploadedBy,
        status: random,
        statusColor: files.filter((item) => item.status == random)[0]
          ?.statusColor,
        progress: files.filter((item) => item.status == random)[0]?.progress,
      };
    });
    setvalue(value.concat(data));
  };

  const onSubmit = () => {
    setFiles(files.concat(value));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  return (
    <div className="flex w-1/2 gap-2.5">
      <label
        htmlFor="file-upload"
        className={`rounded-2xl flex  w-full  ${
          isDragOver ? "bg-green-300" : "bg-white"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDADFileChange}
      >
        <p className="m-auto text-[#060606] opacity-50">
          {isDragOver ? "dragging" : "Upload here- Drag and Drop"}
        </p>
      </label>

      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        multiple
        onChange={handleUploadFileChange}
      />

      <button
        onClick={() => onSubmit()}
        className=" rounded-2xl bg-white px-[7px] py-[5px] flex"
      >
        {" "}
        <span className="flex gap-2.5 whitespace-nowrap">
          <IoMdAdd className="h-6 w-6 bg-[#E65F2B] text-white p-[5px] rounded-full" />
          Upload File
        </span>
      </button>
    </div>
  );
}

export default UploadFile;
