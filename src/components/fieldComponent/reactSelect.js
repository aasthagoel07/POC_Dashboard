import { Field } from "formik";
import React from "react";
import Select from "react-select";
import "../../assets/css/reactSelect.css";

function ReactSelect(props) {
  const { multi, placeholder, name, errorName, options, ...rest } = props;
  return (
    <>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <>

                <Select
                  id={name}
                  {...field}
                  {...rest}
                  isMulti={multi}
                  isSearchable={false}
                  placeholder={placeholder}
                  selected={value}
                  options={options}
                  onChange={(val) => setFieldValue(name, val)}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
            </>
          );
        }}
      </Field>
    </>
  );
}

export default ReactSelect;
