import React from "react";
import PersonsInsuredForm from "./personsInsuredForm";
import { FieldArray } from "formik";

function PersonsInsured({ formik }) {
  return (
    <div className="p-[18px] bg-[#F9F7F7] rounded-xl space-y-5">
      <label className="main-title ">Persons to be insured</label>
      <div className="grid grid-cols-2 gap-x-[60px]">
        <FieldArray name={`personsInsured`} className="">
          <>
            {formik?.values?.personsInsured?.length > 0 &&
              formik?.values?.personsInsured &&
              formik?.values?.personsInsured.map((personsInsured, index) => (
                <div className="space-y-5">
                  <label className="main-title italic">
                    Applicant {index + 1}
                  </label>
                  <PersonsInsuredForm index={index} />
                </div>
              ))}
          </>
        </FieldArray>
      </div>
    </div>
  );
}

export default PersonsInsured;

{
  /* {({ push }) => ( */
}
{
  /* )} */
}
{
  /* <button
  type="button"
  onClick={() =>
    push({
      RelationshipToMember: "",
      Name: "",
      Gender: "",
      ContactInfo: "",
      Phone: "",
      Email: "",
      Address: "",
      Street: "",
      Relation: "",
      ["SSN/DOB"]: "",
      GenderSpecific: "",
      ["PrefferedPhone/Email"]: "",
      ["city/state/zip"]: "",
    })
  }
>
  push
</button> */
}
