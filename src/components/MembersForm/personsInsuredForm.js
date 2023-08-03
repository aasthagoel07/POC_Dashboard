import { Field } from "formik";
import React from "react";
import ReactSelect from "../fieldComponent/reactSelect";
import DatePicker from "../fieldComponent/datePicker";

function PersonsInsuredForm({ index }) {
  const memberOptions = [
    { value: "Member", label: "Member" },
    { value: "Spouse", label: "Spouse" },
    { value: "Child", label: "Child" },
    { value: "Grandchild", label: "GrandChild" },
  ];
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Unspecified", label: "Unspecified" },
  ];
  return (
    <div className="grid grid-cols-2 gap-x-4 min-h-[522px]">
      <div className="w-full flex flex-col gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl ">
        <div className="inputField text-[#9CACCB]">Relationship To Member</div>

        <Field
          type="text"
          name={`personsInsured.${index}.lastName`}
          placeholder="Last Name"
          className="inputField"
        />
        <DatePicker
          className="inputField text-center w-full"
          placeHolder="Birthdate"
          id={`personsInsured.${index}.DOB`}
          name={`personsInsured.${index}.DOB`}
        />
        <div className="inputField text-[#9CACCB]">Gender</div>
        <div className="inputField text-[#9CACCB]">Contact Information</div>
        <Field
          type="number"
          name={`personsInsured.${index}.Phone`}
          placeholder="Phone"
          className="inputField"
        />

        <Field
          type="text"
          name={`personsInsured.${index}.Address`}
          placeholder="Address"
          className="inputField"
        />
        <Field
          type="text"
          name={`personsInsured.${index}.Street`}
          placeholder="Street"
          className="inputField"
        />
        <Field
          type="text"
          name={`personsInsured.${index}.zip`}
          placeholder="Zip"
          className="inputField"
        />
      </div>
      <div className="w-full flex flex-col gap-y-2.5 p-4 bg-[#FBFAFA] rounded-2xl">
        <ReactSelect
          name={`personsInsured.${index}.RelationshipToMembers`}
          options={memberOptions}
          multi={false}
          placeholder="Member / Spouse /Child/ Grandchild"
          errorName={`personsInsured.${index}.RelationshipToMembers`}
          className="inputField"
        />
        <Field
          type="text"
          name={`personsInsured.${index}.firstName`}
          placeholder="First Name"
          className="inputField"
        />

        <Field
          type="number"
          name={`personsInsured.${index}.SSN`}
          placeholder="SSN"
          className="inputField"
        />

        <ReactSelect
          name={`personsInsured.${index}.Gender`}
          options={genderOptions}
          multi={false}
          placeholder="Male / Female / Unspecified"
          errorName={`personsInsured.${index}.Gender`}
          className="inputField"
        />
        <ReactSelect
          name={`personsInsured.${index}.ContactInfo`}
          options={[
            { value: "Preferred", label: "Preferred" },
            { value: "Phone", label: "Phone" },
            { value: "Email", label: "Email" },
          ]}
          multi={false}
          placeholder="Preferred / Phone / Email"
          errorName={`personsInsured.${index}.ContactInfo`}
          className="inputField"
        />
        <Field
          type="email"
          name={`personsInsured.${index}.Email`}
          placeholder="Email"
          className="inputField"
        />

        <Field
          type="text"
          name={`personsInsured.${index}.city`}
          placeholder="City"
          className="inputField"
        />
        <Field
          type="text"
          name={`personsInsured.${index}.state`}
          placeholder="State"
          className="inputField"
        />
      </div>
    </div>
  );
}

export default PersonsInsuredForm;
