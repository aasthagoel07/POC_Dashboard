import { BiChevronLeft, BiChevronRight, BiChevronsRight, BiChevronsLeft } from "react-icons/bi";
import React from "react";


function Pagination({
  onNext,
  links,
  setPage,
  setperPage,
  totalItems,
  from,
  perPage,
  to,
  onPrevious,
})
 {
const startendHandler = (value) => {
setPage(value)
}
  return (
    <>
      <div className=" border-t-2 border-gray-300  py-3 flex items-center justify-between  ">
        <div className="flex-1 flex justify-between sm:hidden">
          <div className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </div>
          <div className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </div>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-gray-700">
              Item per page:{" "}
              <select
                className="bg-transparent focus:outline-none"
                onChange={(e) => setperPage(e.target.value)}
                value={perPage}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              |{" "}
              <span className="font-medium">
                {from}-{to<totalItems ? to : totalItems}
              </span>{" "}
              of <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-xs my-auto">
              {links?.filter((item) => item?.active === true)[0]?.label} of{" "}
              {links?.length} pages
            </p>
            <nav
              className="relative z-0 inline-flex space-x-2 "
              aria-label="Pagination"
            >
              <div
                className="relative inline-flex items-center   text-xs font-medium  cursor-pointer"
              onClick={()=>startendHandler(0)}
              >
                <span className="sr-only">Previous</span>
                <BiChevronsLeft className="text-2xl" aria-hidden="true" />
              </div>
              <div
                className="relative inline-flex items-center   text-xs font-medium  cursor-pointer "
                onClick={onPrevious}
              >
                <span className="sr-only">Previous</span>
                <BiChevronLeft className="text-2xl" aria-hidden="true" />
              </div>

              <div className="space-x-3">
                {links?.map((link, i) => (
                  <button
                    type="button"
                    key={i}
                    disabled={link.disabled}
                    className={`${link.active ? "bg-[#424559] text-white px-1 py-0.5 font-semibold rounded-md" : undefined} text-sm`}
                
                    onClick={() =>
                      typeof link.label !== "string"
                        ? setPage(link.label)
                        : undefined
                    }
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div
                className="relative inline-flex items-center   text-xs font-medium  cursor-pointer"
                onClick={onNext} 
              >
                <span className="sr-only">Next</span>
                <BiChevronRight className="text-2xl" aria-hidden="true" />
              </div>
              <div
                className="relative inline-flex items-center   text-xs font-medium  cursor-pointer"
                onClick={()=>startendHandler(links?.length)}
              >
                <span className="sr-only">Next</span>
                <BiChevronsRight className="text-2xl" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagination;
