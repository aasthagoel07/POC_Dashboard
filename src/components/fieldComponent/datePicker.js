import React from "react";
import  DateView  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field} from "formik";
import "../../assets/css/reactdatepixker.css"


function DatePicker(props) {
  const { label, placeHolder, name, setdate , errorName , ...rest     } = props;

  return (
    <>
      <div>
       
        <Field name={name}>
          {({form, field}) => {
            const { setFieldValue } = form
            const { value } = field
            return (
                <>
              <DateView
                id={name}
                {...field}
                {...rest}
                calendarStartDay={1}
                formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                dateFormatCalendar={"MMM yyyy"}
                dateFormat="MM / dd / yyyy"
                placeholderText={placeHolder}
                minDate={setdate}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
                scrollableYearDropdown={true}
                yearDropdownItemNumber={100}
                showYearDropdown
                showMonthDropdown
                />
                
            </>
            );
        }}
        </Field>
        {/* <ErrorMessage name={errorName} /> */}
      </div>
    </>
  );
}

export default DatePicker;
