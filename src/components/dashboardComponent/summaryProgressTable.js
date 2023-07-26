import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import  Pagination  from "../pagination/pagination";
import usePagination from "headless-pagination-react";

function SummaryProgressTable({ files }) {
  const statuscode = [
    {
      id: 0,
      name: "Delayed",
    },
    {
      id: 1,
      name: "On going",
    },
    {
      id: 2,
      name: "At risk",
    },
    {
      id: 3,
      name: "Completed",
    },
  ];
  // const [data, setdata] = useState(files)
  const [filterDueDate, setfilterDueDate] = useState("");
  const [filterUploadedBy, setFilterUploadedBy] = useState("");
  const [filterStatus, setFilterStatus] = useState();
  const [totalItems, setTotalItems] = useState(1000);
  const [maxLinks, setMaxLinks] = useState(5);
  const [perPage, setperPage] = useState(5);

  const {
    links,
    from,
    to,
    setPage,
    onNext,
    onPrevious,
  } = usePagination({
    totalItems,
    perPage,
    maxLinks,
  });
  useEffect(() => {
 
    setTotalItems(files?.length || 0)
    setPage(1)

   
  }, [])

  const handlefilterDueDateChange = (e) => {
    setfilterDueDate(e.target.value);
  };

  const handleFilterUploadedByChange = (e) => {
    setFilterUploadedBy(e.target.value);
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(parseInt(e.target.value));
  };

  const uniqueUploadedByNames = [
    ...new Set(files.map((file) => file.uploadedBy)),
  ];

  const filteredFiles = files.reduce((filtered, file) => {
    console.log(filterStatus);
    if (
      (filterDueDate && file.duedate !== filterDueDate) ||
      (filterUploadedBy && file.uploadedBy !== filterUploadedBy) ||
      (filterStatus && file.status !== filterStatus)
    ) {
      return filtered;
    }

    return [...filtered, file];
  }, []);
  return (
    <div className="p-[18px] bg-[#F9F7F7] mt-2.5">
      <div className=" w-full">
        <div className="flex justify-between">
          <label className="text-[#060606] font-bold">Upload Files Status</label>
          <div className="flex gap-2 w-1/2">
            <select
              name="uploadedBy"
              id="uploadedBy"
              className="bg-white px-3.5 py-0.5 rounded-2xl form-select w-full"
              value={filterUploadedBy}
              onChange={handleFilterUploadedByChange}
            >
              <option value="">Uploaded By</option>
              {uniqueUploadedByNames?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select
              name="fileName"
              id="fileName"
              className="bg-white px-3.5 py-0.5 rounded-2xl form-select w-full"
              value={filterDueDate}
              onChange={handlefilterDueDateChange}
            >
              <option value="">Due Date</option>
              {files?.map((item) => (
                <option value={item.duedate}>
                  {moment(item?.duedate).format("MMM DD, YYYY")}
                </option>
              ))}
            </select>
            <select
              name="status"
              id="status"
              className="bg-white px-3.5 py-0.5 rounded-2xl form-select w-full"
              value={filterStatus}
              onChange={handleFilterStatusChange}
            >
              <option value="">Status</option>
              {files?.map((item) => (
                <option value={item?.status}>
                  {
                    statuscode?.filter((code) => code?.id === item?.status)[0]
                      ?.name
                  }
                </option>
              ))}
            </select>
          </div>
        </div>

        <table className="w-full my-6 text-sm">
          <thead className=" ">
            <tr className="border-b-2 border-b-[#E1DFDF]">
              <th className="pb-2.5 text-start">File Name</th>
              <th className="pb-2.5 text-center">Uploaded by</th>
              <th className="pb-2.5 text-center">Due Date</th>
              <th className="pb-2.5 text-center">Status</th>
              <th className="pb-2.5 text-end">Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredFiles?.slice(from - 1, to).map((file, index) => (
              <tr key={index}>
                <td className="text-start">
                  <Link to={"./summary"}> {file.filename}</Link>
                </td>
                <td className="text-center">{file.uploadedBy}</td>
                <td className="text-center">
                  {moment(file?.duedate).format("MMM DD, YYYY")}
                </td>

                <td className={`text-center flex justify-center `}>
                  <div
                    className={`flex justify-center items-center m-1 font-medium py-1 px-2  text-white rounded-full w-fit  `}
                    style={{ backgroundColor: file.statusColor }}
                  >
                    <div className="text-xs font-normal leading-none  flex-initial opacity-100">
                      {
                        statuscode?.filter(
                          (code) => code?.id === file?.status
                        )[0]?.name
                      }
                    </div>
                  </div>
                </td>

                <td className="text-end">
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      variant="determinate"
                      value={file.progress}
                      style={{ color: file?.statusColor }}
                      thickness={5}
                      size={32}
                      sx={{
                        colorSecondary: () => "black",
                      }}
                    />
                    <div
                      style={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="text-[9px]">{file.progress}%</div>
                    </div>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </div>
    </div>
  );
}

export default SummaryProgressTable;
