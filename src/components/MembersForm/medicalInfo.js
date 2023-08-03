import React from "react";
import MedicalInfoForm from "./medicalInfoForm";
import { Field, FieldArray } from "formik";
import { IoMdAdd } from "react-icons/io";
import PrescribeMedicationForm from "./prescribeMedicationForm";
import { FiTrash2 } from "react-icons/fi";

const medicalHistory = [
  {
    id: 1,
    name: "Shortness of breath, chest pain, palpitations, heart abnormality, anemia, blood or blood vessel disease or hypertension",
    values: false,
  },
  {
    id: 2,
    name: "Tuberculosis, asthma, obstructive sleep apnea (OSA), pleurisy, or any disorder of the lungs",
    values: false,
  },
  {
    id: 3,
    name: "Convulsions, epilepsy, stroke, loss of consciousness, brain or nervous disorder, post traumatic stress disorder",
    values: false,
  },
  {
    id: 4,
    name: "(PTSD), anxiety, depression or mental illness",
    values: false,
  },
  {
    id: 5,
    name: "Growth, tumor, malignancy or cancer, disease of the skin, bones or joints; arthritis or rheumatism",
    values: false,
  },
];

function MedicalInfo({ formik }) {
  return (
    <div className="p-[18px] bg-[#F9F7F7] rounded-xl space-y-5">
      <label className="main-title ">
        Medical Information ( Please see the form details from xls and
        replicate)
      </label>
      <div className="grid grid-cols-2 gap-x-[60px]">
        <FieldArray name={`medicalInfo`} className="">
          <>
            {formik?.values?.medicalInfo?.length > 0 &&
              formik?.values?.medicalInfo &&
              formik?.values?.medicalInfo.map((medicalInfo, index) => (
                <div className="space-y-5" key={index}>
                  <label className="main-title italic">
                    Applicant {index + 1}
                  </label>
                  <MedicalInfoForm index={index} />
                  <hr />
                  <FieldArray
                    name={`medicalInfo.${index}.prescribedMedication`}
                    className=""
                  >
                    {({ remove, push }) => (
                      <>
                        <div className="flex justify-between">
                          <label className="text-lg my-auto font-semibold">
                            Prescribed Medication
                          </label>
                          <button
                            type="button"
                            className="bg-[#E65F2B] py-1 mt-2.5 px-3  rounded-full my-auto text-white flex"
                            onClick={() =>
                              push({
                                medicineName: "",
                                reasonTaken: "",
                                dates: null,
                                stillTaking: "",
                              })
                            }
                          >
                            <IoMdAdd className="text-xl " />
                            Add Prescription
                          </button>
                        </div>
                        {formik?.values?.medicalInfo[index].prescribedMedication
                          ?.length > 0 &&
                          formik?.values?.medicalInfo[index]
                            .prescribedMedication &&
                          formik?.values?.medicalInfo[
                            index
                          ].prescribedMedication.map(
                            (prescribedMedication, idx) => (
                              <div
                                className="bg-[#FBFAFA] p-3 rounded-2xl"
                                key={idx}
                              >
                                <PrescribeMedicationForm
                                  idx={idx}
                                  index={index}
                                />
                                <button
                                  type="button"
                                  onClick={() => remove(idx)}
                                  className="bg-[#E65F2B] py-1 mt-2.5 px-3  rounded-full my-auto text-white flex"
                                >
                                  {" "}
                                  <FiTrash2 className="text-xl    " /> Delete
                                  this prescription
                                </button>
                              </div>
                            )
                          )}
                      </>
                    )}
                  </FieldArray>
                  <hr />

                  <div>
                    <label className="text-lg my-auto font-semibold">
                      Medical History
                    </label>
                    <div className="space-y-2.5 bg-[#FBFAFA] p-3 rounded-2xl">
                      {medicalHistory.map((item, idx) => (
                        <div key={item.id} className="grid grid-cols-4 gap-2 ">
                          <label className="col-span-3">
                            {idx + 1} ) {item.name}
                          </label>
                          <div className="flex justify-around">
                            <label>
                              <Field
                                type="radio"
                                name={`medicalInfo.${index}.MedicalHistory.${idx}.id${item.id}`}
                                value={"true"}
                                className="form-radio radio"
                              />
                              Yes
                            </label>

                            <label>
                              <Field
                                type="radio"
                                name={`medicalInfo.${index}.MedicalHistory.${idx}.id${item.id}`}
                                value={"false"}
                                className="form-radio radio"
                              />
                              No
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </>
        </FieldArray>
      </div>
    </div>
  );
}

export default MedicalInfo;
