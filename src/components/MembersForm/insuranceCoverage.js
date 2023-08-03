import React from 'react'
import InsuranceCoverageForm from './insuranceCoverageForm'
import { FieldArray } from 'formik'

function InsuranceCoverage({formik}) {
  return (
    <div className="p-[18px] bg-[#F9F7F7] rounded-xl space-y-5">
      <label className="main-title ">Insurance Coverage</label>
      <div className="grid grid-cols-2 gap-x-[60px]">
        
        <FieldArray name={`insuranceCoverage`} className="">
          <>
            {formik?.values?.insuranceCoverage?.length > 0 &&
              formik?.values?.insuranceCoverage &&
              formik?.values?.insuranceCoverage.map((insuranceCoverage, index) => (
                <div className="space-y-5">
                  <label className="main-title italic">
                    Applicant {index + 1}
                  </label>
                  <InsuranceCoverageForm index={index} />
                </div>
              ))}
          </>
        </FieldArray>
          
        
      </div>
    </div>
  )
}

export default InsuranceCoverage