import { Field } from "formik";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import ReactSelect from "../fieldComponent/reactSelect";

const serviceOption = [
  { value: "Army", label: "Army" },
  { value: "AirForce", label: "Air Force" },
  { value: "Navy", label: "Navy" },
  { value: "Marins", label: "Marins" },
  { value: "CoastGuard", label: "Coast Guard" },
];
const statusOption = [
  { value: "Active", label: "Active" },
  { value: "Guard", label: "Guard" },
  { value: "Reserve", label: "Reserve" },
  { value: "Veteran", label: "Veteran" },
];
function MembersInformation() {
  return (
    <div className="p-[18px] bg-[#F9F7F7] rounded-xl space-y-5">
      <div className="flex justify-between">
        <label className="main-title ">Member Information</label>
        <button
          type="button"
          className=" rounded-2xl bg-white px-[7px] py-[5px] flex"
        >
          {" "}
          <span className="flex gap-2.5 whitespace-nowrap m-auto">
            <IoMdAdd className="h-6 w-6 bg-[#E65F2B] text-white p-[5px] rounded-full" />
            Contact Details
          </span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="inputField"
        />
        <Field
          type="text"
          name="firstName"
          placeholder="First Name"
          className="inputField"
        />
        <Field
          type="text"
          name="middleName"
          placeholder="MI"
          className="inputField"
        />
        <Field
          type="number"
          name="ssn"
          placeholder="SSN#"
          className="inputField"
        />
        <div className="inputField text-[#9CACCB]">Military Service</div>
        <ReactSelect
          name="militaryService"
          options={serviceOption}
          multi={true}
          placeholder="Army /Airforce/ Navy/ Marines/Coast guard"
          errorName="militaryService"
          className="inputField"
        />
        <div className="inputField text-[#9CACCB]">Military Status</div>
        <ReactSelect
          name="militaryStatus"
          options={statusOption}
          multi={true}
          placeholder="Active / Guard / Reserve / Veteran"
          errorName="militaryStatus"
          className="inputField"
        />
      </div>
    </div>
  );
}

export default MembersInformation;
