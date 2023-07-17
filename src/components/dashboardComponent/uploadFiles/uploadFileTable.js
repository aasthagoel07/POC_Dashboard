import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function UploadFileTable({ files }) {
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
  const [filterFileName, setFilterFileName] = useState("");
  const [filterUploadedBy, setFilterUploadedBy] = useState("");
  const [filterStatus, setFilterStatus] = useState();

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
    ...new Set(files.map((file) => file.uploadedBy)),
  ];

  const filteredFiles = files.reduce((filtered, file) => {
    console.log(filterStatus);
    if (
      (filterFileName && file.filename !== filterFileName) ||
      (filterUploadedBy && file.uploadedBy !== filterUploadedBy) ||
      (filterStatus && file.status !== filterStatus)
    ) {
      return filtered;
    }

    return [...filtered, file];
  }, []);

  return (
    <div className="p-[18px]">
      <div className=" min-w-[60%] xl:w-fit w-full">
        <div className="flex justify-between">
          <label className="text-[#060606]">Upload Files Status</label>
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
              value={filterFileName}
              onChange={handleFilterFileNameChange}
            >
              <option value="">File Name</option>
              {files?.map((item) => (
                <option value={item?.filename}>{item?.filename}</option>
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

        <table className="w-full my-6">
          <thead className="text-sm ">
            <tr>
              <th className="pb-2.5 text-start">File Name</th>
              <th className="pb-2.5 text-center">Uploaded by</th>
              <th className="pb-2.5 text-center">Status</th>
              <th className="pb-2.5 text-end">Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredFiles.map((file, index) => (
              <tr key={index}>
                <td className="text-start">{file.filename}</td>
                <td className="text-center">{file.uploadedBy}</td>
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
      </div>
    </div>
  );
}

export default UploadFileTable;