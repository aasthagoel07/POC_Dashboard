import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Pagination from "../../pagination/pagination";
import usePagination from "headless-pagination-react";
import moment from "moment";

function ApplicationTable({ files, uploadFileHandler }) {
  // const [data, setdata] = useState(files)
  const [filterFileName, setFilterFileName] = useState("");
  const [filterUploadedBy, setFilterUploadedBy] = useState("");
  const [filterStatus, setFilterStatus] = useState();

  const [totalItems, setTotalItems] = useState(1000);
  const [maxLinks, setMaxLinks] = useState(5);
  const [perPage, setperPage] = useState(5);

  const { links, from, to, setPage, onNext, onPrevious } = usePagination({
    totalItems,
    perPage,
    maxLinks,
  });
  useEffect(() => {
    setTotalItems(files?.length || 0);
    setPage(1);
  }, []);

  const handleFilterFileNameChange = (e) => {
    setFilterFileName(e.target.value);
  };

  const handleFilterUploadedByChange = (e) => {
    setFilterUploadedBy(e.target.value);
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(parseInt(e.target.value));
  };

  const uniqueUploadedByNames = [
    ...new Set(files.map((file) => file.clientName)),
  ];

  const filteredFiles = files.reduce((filtered, file) => {
    console.log(filterStatus);
    if (
      (filterFileName && file.applcationName !== filterFileName) ||
      (filterUploadedBy && file.clientName !== filterUploadedBy) ||
      (filterStatus && file.date !== filterStatus)
    ) {
      return filtered;
    }

    return [...filtered, file];
  }, []);

  return (
    <div className="p-[18px] bg-[#FBFAFA] mt-2.5">
      <div className="lg:w-3/4 w-full">
        <div className="flex justify-between">
          <label className="text-[#060606] font-bold">
            Appplication status
          </label>
          <div className="flex gap-2 w-1/2">
            <select
              name="clientName"
              id="clientName"
              className="bg-white px-3.5 py-0.5 rounded-2xl form-select w-full"
              value={filterUploadedBy}
              onChange={handleFilterUploadedByChange}
            >
              <option value="">Application Name</option>
              {files?.map((item) => (
                <option value={item?.applicationName}>
                  {item?.applicationName}
                </option>
              ))}
            </select>
            <select
              name="fileName"
              id="fileName"
              className="bg-white px-3.5 py-0.5 rounded-2xl form-select w-full"
              value={filterFileName}
              onChange={handleFilterFileNameChange}
            >
              <option value="">Client Name</option>

              {uniqueUploadedByNames?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select
              name="status"
              id="status"
              className="bg-white px-3.5 py-0.5 rounded-2xl form-select w-full"
              value={filterStatus}
              onChange={handleFilterStatusChange}
            >
              <option value="">Date</option>
              {files?.map((item) => (
                <option value={item.date}>
                  {moment(item?.date).format("MMM DD, YYYY")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <table className="w-full my-6 text-sm">
          <thead className="border-b-2 border-b-[#E1DFDF]">
            <tr>
              <th className="pb-2.5 text-start">Application Name</th>
              <th className="pb-2.5 text-center">Client Name</th>
              <th className="pb-2.5 text-center">Date</th>
              <th className="pb-2.5 text-end">No of Files</th>
            </tr>
          </thead>
          <tbody>
            {filteredFiles?.slice(from - 1, to).map((file, index) => (
              <tr key={index} className="h-10 cursor-pointer" onClick={()=>uploadFileHandler(file.id)}>
                <td className="text-start" >
                  {file.applicationName}
                </td>
                <td className="text-center">{file.clientName}</td>
                <td className="text-center">
                  {moment(file?.duedate).format("MMM DD, YYYY")}
                </td>

                <td className="text-end">
                  <div className="mr-[10%]">{file.noOfFiles}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {files?.length> 5 &&
        <div className=" mt-5 ">
          <Pagination
            onNext={onNext}
            setPage={setPage}
            links={links}
            setperPage={setperPage}
            perPage={perPage}
            from={from}
            to={to}
            totalItems={totalItems}
            onPrevious={onPrevious}
            />
        </div>
          }
      </div>
    </div>
  );
}

export default ApplicationTable;
