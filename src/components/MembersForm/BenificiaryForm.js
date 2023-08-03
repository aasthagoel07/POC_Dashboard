import { Field } from "formik";
import React from "react";
import ReactSelect from "../fieldComponent/reactSelect";
import DatePicker from "../fieldComponent/datePicker";

function BenificiaryForm({ index }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 ">
      <div className="w-full flex flex-col gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl ">
        <Field
          type="text"
          name={`benificiary.${index}.Primary`}
          placeholder="Primary"
          className="inputField"
        />
        <Field
          type="text"
          name={`benificiary.${index}.FirstName`}
          placeholder="First Name"
          className="inputField"
        />
        <DatePicker
          className="inputField text-center w-full"
          placeHolder="Birthdate"
          id={`benificiary.${index}.DOB`}
          name={`benificiary.${index}.DOB`}
        />
      </div>
      <div className="w-full flex flex-col gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl">
        <Field
          type="text"
          name={`benificiary.${index}.LastName`}
          placeholder="Last Name"
          className="inputField"
        />
        <Field
          type="text"
          name={`benificiary.${index}.SSN`}
          placeholder="SSN"
          className="inputField"
        />
        <Field
          type="text"
          name={`benificiary.${index}.RelationshipToInsured`}
          placeholder="Relationship To Insured"
          className="inputField"
        />
      </div>
    </div>
  );
}

export default BenificiaryForm;
