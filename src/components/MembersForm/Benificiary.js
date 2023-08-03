import React from "react";
import BenificiaryForm from "./BenificiaryForm";
import { FieldArray } from "formik";

function Benificiary({ formik }) {
  return (
    <div className="p-[18px] bg-[#F9F7F7] rounded-xl space-y-5">
      <label className="main-title ">Benificiary Designation</label>
      <div className="grid grid-cols-2 gap-x-[60px]">
        <FieldArray name={`benificiary`} className="">
          <>
            {formik?.values?.benificiary?.length > 0 &&
              formik?.values?.benificiary &&
              formik?.values?.benificiary.map((benificiary, index) => (
                <div className="space-y-5">
                  <label className="main-title italic">
                    Applicant {index + 1}
                  </label>
                  <BenificiaryForm index={index} />
                </div>
              ))}
          </>
        </FieldArray>
      </div>
    </div>
  );
}

export default Benificiary;
