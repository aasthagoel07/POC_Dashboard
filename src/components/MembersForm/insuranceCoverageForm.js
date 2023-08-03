import { Field } from "formik";
import React from "react";
import ReactSelect from "../fieldComponent/reactSelect";

function InsuranceCoverageForm({ index }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 min-h-[522px]">
      <div className="w-full flex flex-col gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl ">
        <Field
          type="text"
          name={`insuranceCoverage.${index}.TermLife`}
          placeholder="Term Life"
          className="inputField"
        />
        
        <Field
          type="text"
          name={`insuranceCoverage.${index}.LevelTerm2`}
          placeholder="Level Term 2"
          className="inputField"
        />
        
        <Field
          type="text"
          name={`insuranceCoverage.${index}.ValueAddedWholeLife`}
          placeholder="Value Added Whole Life"
          className="inputField"
        />
        
        <div className="inputField text-[#9CACCB]">Pay for XX years</div>
    
        <Field
          type="text"
          name={`insuranceCoverage.${index}.SinglePayment`}
          placeholder="Single Payment"
          className="inputField"
        />
        
        <Field
          type="number"
          name={`insuranceCoverage.${index}.MonthlyPremium`}
          placeholder="Monthly Premium"
          className="inputField"
        />
      </div>
      <div className="w-full flex flex-col gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl">
      <Field
          type="text"
          name={`insuranceCoverage.${index}.LevelTerm1`}
          placeholder="Level Term 1"
          className="inputField"
        />
        <Field
          type="text"
          name={`insuranceCoverage.${index}.FiveYearRenewableTerm`}
          placeholder="Five Year Renewable Term"
          className="inputField"
        />
        <Field
          type="text"
          name={`insuranceCoverage.${index}.PaytoAge100`}
          placeholder="Pay to Age 100"
          className="inputField"
        />
            <ReactSelect
          name={`insuranceCoverage.${index}.PayforXXyears`}
          options={[
            { value: "30", label: "30" },
            { value: "20", label: "20" },
            { value: "7", label: "7" },
          ]}
          multi={false}
          placeholder="30 / 20 / 7"
          errorName={`insuranceCoverage.${index}.PayforXXyears`}
          className="inputField"
        />
        <Field
          type="number"
          name={`insuranceCoverage.${index}.InsuranceAmount`}
          placeholder="Insurance Amount"
          className="inputField"
        />
        {/* <div className="inputField "></div> */}
      </div>
    </div>
  );
}

export default InsuranceCoverageForm;
