import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";

const data = [
  {
    filename: "Nelsa web developement",
    uploadedBy: "Om prakash sao",
    status: 3,
    statusColor: "#1A932E",
    duedate: "Thu May 25 2023 18:36:49 GMT+0530 (India Standard Time)",
    progress: 100,
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
  },
  {
    filename: "Datascale AI app ",
    uploadedBy: "Neilsan mando",
    status: 0,
    statusColor: "#E5AE21",
    duedate: "Tue Jun 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 35,
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
  },
  {
    filename: "Media channel branding",
    uploadedBy: "Tiruvelly priya",
    status: 2,
    statusColor: "#EE201C",
    duedate: "Thu Jul 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 68,
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
  },
  {
    filename: "Corlax iOS app develpoement",
    uploadedBy: "Matte hannery",
    status: 3,
    statusColor: "#1A932E",
    duedate: "Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 100,
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
  },
  {
    filename: "Website builder developement",
    uploadedBy: "Sukumar rao",
    status: 1,
    statusColor: "#E65F2B",
    duedate: "Wed Mar 15 2023 00:00:00 GMT+0530 (India Standard Time)",
    progress: 50,
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
  },
];
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

function SummaryPage() {
  const [filterDueDate, setfilterDueDate] = useState("");
  const [filterUploadedBy, setFilterUploadedBy] = useState("");
  const [filterStatus, setFilterStatus] = useState();
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
    ...new Set(data.map((file) => file.uploadedBy)),
  ];

  const filteredFiles = data.reduce((filtered, file) => {
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
    <div className="h-full">
      <div className="top-head-title">
        <label className="main-title ">Summary</label>{" "}
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
      <div className="p-4">
        <p className="font-bold text-base">Overall Summary</p>
        <p className="text-sm mt-2.5">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions
        </p>
      </div>
      <div className=" mt-2.5 text-sm">
        <div className=" w-full p-[18px] bg-[#F9F7F7] mb-3.5 rounded-2xl">
          <div className="flex justify-between lg:w-2/3 w-full">
            <label className="text-[#060606] font-bold text-base">
              File Wise Summary
            </label>
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
                {data?.map((item) => (
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
                {data?.map((item) => (
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

          <div className="grid grid-cols-12 lg:w-2/3 w-full mt-8 border-b-2 border-b-[#E1DFDF] pb-2.5 font-bold">
            <div className="pb-2.5 text-start col-span-3">File Name</div>
            <div className="pb-2.5 text-center col-span-3">Uploaded by</div>
            <div className="pb-2.5 text-center col-span-2">Due Date</div>
            <div className="pb-2.5 text-center col-span-2">Status</div>
            <div className="pb-2.5 text-center col-span-2">Progress</div>
          </div>
          <div className="grid grid-cols-12 lg:w-2/3 w-full  py-2">
            <div className=" text-start col-span-3">
              {filteredFiles[0]?.filename}
            </div>
            <div className=" text-center col-span-3">
              {filteredFiles[0]?.uploadedBy}
            </div>
            <div className=" text-center col-span-2">
              {filteredFiles[0]?.duedate? moment(filteredFiles[0]?.duedate).format("MMM DD, YYYY"): null}
            </div>
            <div className="justify-self-center col-span-2">
              <div
                className={`flex  justify-center items-center m-1 font-medium py-1 px-2  text-white rounded-full w-fit  `}
                style={{ backgroundColor: filteredFiles[0]?.statusColor }}
              >
                <div className="text-xs font-normal leading-none  flex-initial opacity-100">
                  {
                    statuscode?.filter(
                      (code) => code?.id === filteredFiles[0]?.status
                    )[0]?.name
                  }
                </div>
              </div>
            </div>
            <div className=" text-center col-span-2">
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={filteredFiles[0]?.progress}
                  style={{ color: filteredFiles[0]?.statusColor }}
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
                  <div className="text-[9px]">
                    {filteredFiles[0]?.progress? `${filteredFiles[0]?.progress} %` : null}
                  </div>
                </div>
              </Box>
            </div>
          </div>
          <div className="lg:w-11/12 w-full">
            {filteredFiles[0]?.description}
          </div>
        </div>
        {filteredFiles?.slice(1).map((file, index) => (
          <div className="w-full p-[18px] bg-[#F9F7F7] mb-3.5 rounded-2xl" key={index}>
          <div className="grid grid-cols-12 lg:w-2/3 w-full  py-2" >
            <div className="text-start col-span-3">{file.filename}</div>
            <div className="text-center col-span-3">{file.uploadedBy}</div>
            <div className="text-center col-span-2">
              {moment(file?.duedate).format("MMM DD, YYYY")}
            </div>

            <div className={`text-center flex justify-center  col-span-2`}>
              <div
                className={`flex justify-center items-center m-1 font-medium py-1 px-2  text-white rounded-full w-fit  `}
                style={{ backgroundColor: file.statusColor }}
              >
                <div className="text-xs font-normal leading-none  flex-initial opacity-100">
                  {
                    statuscode?.filter((code) => code?.id === file?.status)[0]
                      ?.name
                  }
                </div>
              </div>
            </div>

            <div className="text-center col-span-2">
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
            </div>
          </div>
          <div className="lg:w-11/12 w-full">
            {filteredFiles[0].description}
          </div>
        </div>
        ))}
      </div>
    </div>
    );
}

export default SummaryPage;

{
  /* <div className="bg-[#DEDEDE] p-[18px] rounded-2xl">
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
        </div> */
}
