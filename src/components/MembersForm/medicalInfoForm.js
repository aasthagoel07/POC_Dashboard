import { Field, FieldArray } from "formik";
import React from "react";
import DatePicker from "../fieldComponent/datePicker";

function MedicalInfoForm({ index }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        <Field
          type="text"
          name={`medicalInfo.${index}.height`}
          placeholder="Height"
          className="inputField"
        />
        <Field
          type="text"
          name={`medicalInfo.${index}.weight`}
          placeholder="Weight"
          className="inputField"
        />

        <DatePicker
          className="inputField text-center w-full"
          placeHolder="Last Physical Exam"
          id={`medicalInfo.${index}.LastPhysicalExam`}
          name={`medicalInfo.${index}.LastPhysicalExam`}
        />
       
      </div>
      
    </>
  );
}

export default MedicalInfoForm;
