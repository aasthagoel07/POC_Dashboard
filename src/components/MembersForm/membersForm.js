import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import MembersInformation from "./membersInformation";
import PersonsInsured from "./PersonsInsured";
import InsuranceCoverage from "./insuranceCoverage";
import Benificiary from "./Benificiary";
import MedicalInfo from "./medicalInfo";
import DetailsForm from "./detailsForm";
import { IoMdAdd } from "react-icons/io";
import { BsFillCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
const medicalHistory = [
  {
    id: 1,
    name: "Shortness of breath, chest pain, palpitations, heart abnormality, anemia, blood or blood vessel disease or hypertension",
    values: "false",
  },
  {
    id: 2,
    name: "Tuberculosis, asthma, obstructive sleep apnea (OSA), pleurisy, or any disorder of the lungs",
    values: "true",
  },
  {
    id: 3,
    name: "Convulsions, epilepsy, stroke, loss of consciousness, brain or nervous disorder, post traumatic stress disorder",
    values: "false",
  },
  {
    id: 4,
    name: "(PTSD), anxiety, depression or mental illness",
    values: "false",
  },
  {
    id: 5,
    name: "Growth, tumor, malignancy or cancer, disease of the skin, bones or joints; arthritis or rheumatism",
    values: "false",
  },
];

function MembersForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    ssn: null,
    militaryService: "",
    militaryStatus: "",
    consent: false,
    personsInsured: [
      {
        RelationshipToMember: "",
        lastName: "",
        firstName: "",
        SSN: "",
        Birthdate: null,
        Gender: "",
        ContactInfo: "",
        Phone: "",
        Email: "",
        Address: "",
        Street: "",
        city: "",
        zip: "",
      },
      {
        RelationshipToMember: "",
        lastName: "",
        firstName: "",
        SSN: "",
        Birthdate: null,
        Gender: "",
        ContactInfo: "",
        Phone: "",
        Email: "",
        Address: "",
        Street: "",
        city: "",
        zip: "",
      },
    ],
    insuranceCoverage: [
      {
        TermLife: "",
        LevelTerm1: "",
        LevelTerm2: "",
        FiveYearRenewableTerm: "",
        ValueAddedWholeLife: "",
        PaytoAge100: "",
        PayforXXyears: "",
        SinglePayment: "",
        InsuranceAmount: null,
        MonthlyPremium: null,
      },
      {
        TermLife: "",
        LevelTerm1: "",
        LevelTerm2: "",
        FiveYearRenewableTerm: "",
        ValueAddedWholeLife: "",
        PaytoAge100: "",
        PayforXXyears: "",
        SinglePayment: "",
        InsuranceAmount: null,
        MonthlyPremium: null,
      },
    ],
    benificiary: [
      {
        Primary: "",
        lastName: "",
        firstName: "",
        RelationtoInsured: "",
        SSN: null,
        DOB: null,
      },
      {
        Primary: "",
        lastName: "",
        firstName: "",
        RelationtoInsured: "",
        SSN: null,
        DOB: null,
      },
    ],
    medicalInfo: [
      {
        height: "",
        weigth: "",
        LastPhysicalExam: "",
        prescribedMedication: [
          {
            medicineName: "",
            reasonTaken: "",
            dates: null,
            stillTaking: "",
          },
        ],
        MedicalHistory: medicalHistory?.map((item) => ({
          [`id${item.id}`]: item.values,
          name: item.name
        })),
      },
      {
        height: "",
        weigth: "",
        LastPhysicalExam: "",
        prescribedMedication: [
          {
            medicineName: "",
            reasonTaken: "",
            dates: null,
            stillTaking: "",
          },
        ],
        MedicalHistory: medicalHistory?.map((item) => ({
          [`id${item.id}`]: item.values,
          name: item.name
        })),
      },
    ],
    details: [
      {
        PrintedName: "",
        Signature: "",
        Date: "",
      },
      {
        PrintedName: "",
        Signature: "",
        Date: "",
      },
    ],
  };

  const validationSchema = yup.object().shape({
    // name: yup.string(),
    // consent: yup.boolean(),
    // personsInsured: yup.array().of(
    //   yup.object().shape({
    //     RelationshipToMember: yup.string(),
    //     Name: yup.string(),
    //     Gender: yup.string(),
    //     ContactInfo: yup.string(),
    //     Phone: yup.string(),
    //     Email: yup.string(),
    //     Address: yup.string(),
    //     Street: yup.string(),
    //     Relation: yup.string(),
    //     ["SSN/DOB"]: yup.string(),
    //     GenderSpecific: yup.string(),
    //     ["PrefferedPhone/Email"]: yup.string(),
    //     ["city/state/zip"]: yup.string(),
    //   })
    // ),
    // insuranceCoverage: yup.array().of(
    //   yup.object().shape({
    //     TermLife: yup.string(),
    //     LevelTerm1: yup.string(),
    //     LevelTerm2: yup.string(),
    //     FiveYearRenewableTerm: yup.string(),
    //     ValueAddedWholeLife: yup.string(),
    //     PaytoAge100: yup.string(),
    //     ["Payforyears30/20/7"]: yup.string(),
    //     SinglePayment: yup.string(),
    //     InsuranceAmount: yup.number(),
    //     MonthlyPremium: yup.number(),
    //   })
    // ),
    // benificiary: yup.array().of(
    //   yup.object().shape({
    //     Primary: yup.string(),
    //     BenificiaryName: yup.string(),
    //     RelationtoInsured: yup.string(),
    //     ["BenificiarySSN/DOB"]: yup.string(),
    //   })
    // ),
    // medicalInfo: yup.array().of(
    //   yup.object().shape({
    //     MedicalTermLife: yup.string(),
    //     MedicalLevelTerm1: yup.string(),
    //     MedicalLevelTerm2: yup.string(),
    //     MedicalFiveYearRenewableTerm: yup.string(),
    //   })
    // ),
    // details: yup.array().of(
    //   yup.object().shape({
    //     PrintedName: yup.string(),
    //     Signature: yup.string(),
    //     Date: yup.string(),
    //   }))
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="p-[30px]">
      hello
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className="space-y-6">
              <MembersInformation formik={formik} />
              <PersonsInsured formik={formik} />
              <InsuranceCoverage formik={formik} />
              <Benificiary formik={formik} />
              <MedicalInfo formik={formik} />
              <div className="p-[18px] bg-[#F9F7F7] rounded-xl space-y-5">
                <div className="grid grid-cols-2 gap-x-[60px]">
                  <FieldArray name={`details`} className="">
                    <>
                      {formik?.values?.details?.length > 0 &&
                        formik?.values?.details &&
                        formik?.values?.details.map((details, index) => (
                          <div className="space-y-5" key={index}>
                            <label className="main-title italic">
                              Applicant {index + 1}
                            </label>
                            <DetailsForm index={index} />
                          </div>
                        ))}
                    </>
                  </FieldArray>
                </div>
                <div className="flex justify-around">
                  <div>
                    <label
                      htmlFor="consent"
                      className={`${
                        formik.values.consent
                          ? "bg-[#E65F2B] text-white"
                          : "bg-white"
                      } rounded-[55px] text-center px-5 cursor-pointer select-none flex w-fit h-11`}
                    >
                      <span className="flex gap-2.5 whitespace-nowrap m-auto">
                        {formik.values.consent ? (
                          <BsFillCheckCircleFill className="text-2xl text-white   rounded-full" />
                        ) : (
                          <BsFillCircleFill className="text-2xl text-[#E65F2B]   rounded-full" />
                        )}
                        I consent (tick)
                      </span>
                    </label>
                    <Field
                      type="checkbox"
                      id="consent"
                      name="consent"
                      className="hidden"
                    />
                  </div>
                  <button
                    type="button"
                    className=" rounded-[55px] text-center px-5 bg-white w-fit h-11 flex"
                  >
                    {" "}
                    <span className="flex gap-2.5 whitespace-nowrap m-auto">
                      <IoMdAdd className="h-6 w-6 bg-[#E65F2B] text-white p-[5px] rounded-full" />
                      Save For Letter
                    </span>
                  </button>
                  <button
                    type="submit"
                    className=" rounded-[55px] text-center px-5 bg-white w-fit h-11 flex"
                  >
                    {" "}
                    <span className="flex gap-2.5 whitespace-nowrap m-auto">
                      <IoMdAdd className="h-6 w-6 bg-[#E65F2B] text-white p-[5px] rounded-full" />
                      SUBMIT
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MembersForm;
