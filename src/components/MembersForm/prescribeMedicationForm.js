import { Field } from "formik";
import React from "react";
import DatePicker from "../fieldComponent/datePicker";
import { FiTrash2 } from "react-icons/fi";

function PrescribeMedicationForm({ idx, index }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
      <Field
        type="text"
        name={`medicalInfo.${index}.prescribedMedication.${idx}.medicineName`}
        placeholder="Medicine Name"
        className="inputField"
      />
      <Field
        type="text"
        name={`medicalInfo.${index}.prescribedMedication.${idx}.reasonTaken`}
        placeholder="Reason Taken"
        className="inputField"
      />
      <DatePicker
        className="inputField text-center w-full"
        placeHolder="Dates"
        id={`medicalInfo.${index}.prescribedMedication.${idx}.dates`}
        name={`medicalInfo.${index}.prescribedMedication.${idx}.dates`}
      />
        <div className="flex gap-3 m-auto">
        <label className="my-auto font-bold">Still Taking:</label>
          <div className="text-black mr-6 text-base flex ">
            <Field
              type="radio"
              name={`medicalInfo.${index}.prescribedMedication.${idx}.stillTaking`}
              value="yes"
              className="form-radio radio"
            />
            <label className="my-auto">Yes</label>
          </div>

          <div className="text-black mr-6 text-base flex ">
            <Field
              type="radio"
              name={`medicalInfo.${index}.prescribedMedication.${idx}.stillTaking`}
              value="no"
              className="form-radio radio"
            />
            <label className="my-auto">No</label>
          </div>
      </div>
    </div>
  );
}

export default PrescribeMedicationForm;
