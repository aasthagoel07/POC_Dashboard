import { Field } from "formik";
import React from "react";
import DatePicker from "../fieldComponent/datePicker";

function DetailsForm({ index }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl ">
      <Field
        type="text"
        name={`details.${index}.PrintedName`}
        placeholder="Printed Name"
        className="inputField col-span-2"
      />
      <Field
        type="text"
        name={`details.${index}.Signature`}
        placeholder="Signature"
        className="inputField"
      />
      <DatePicker
        className="inputField text-center w-full"
        placeHolder="Date"
        id={`details.${index}.Date`}
        name={`details.${index}.Date`}
      />
    </div>
  );
}

export default DetailsForm;
