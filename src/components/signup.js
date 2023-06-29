import React, { useState } from "react";
import logo from "../assets/images/login_vector_2x.png";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiHide, BiShow } from "react-icons/bi";
import "../assets/css/signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { ApiLinks } from "../assets/apis/apiLink";
import { toast } from "react-hot-toast";
import Backdrop from "@mui/material/Backdrop";
import Loader from "./loader";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [open, setOpen] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    pwd: "",
    cpwd: "",
  };
  let navigate = useNavigate();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("*please enter your first name "),
    lastName: Yup.string().required("*please enter your last name "),
    email: Yup.string().required("*please enter your email "),
    pwd: Yup.string()
      .required("*please enter your password")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    cpwd: Yup.string()
      .oneOf([Yup.ref("pwd"), null], "* Passwords must match")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("* Confirm Password is required"),
  });
  const eyeHandler = () => {
    setShowPassword(!showPassword);
  };

  const confirmEyeHandler = () => {
    setShowCpassword(!showCpassword);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (value) => {
    setOpen(true);

    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.pwd,
        confirmPassword: value.cpwd,
      }),
    };
    // await fetch(`${ApiLinks}/auth/signup`, requestOptions)
    //   .then((response) => response.json())
    //   .then((body) => {
    //     if (body.status === 200) {
    //       notify();
    //       localStorage.setItem("email", value.email);
    //       localStorage.setItem("firstName", value.firstName);
    //       localStorage.setItem("lastName", value.lastName);
    //       handleClose();
    //       history.push("./passcode");
    //     } else {
    //       notifyFailure(body.message);
    //       console.log(body);
    //       handleClose();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     notifyFailure(err.message);
    //     handleClose();
    //   });
    navigate("/dashboard")
  };
  const notify = () => toast.success("signup success");
  const notifyFailure = (value) => toast.error(value);
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Loader />
      </Backdrop>
      <div className="grid lg:grid-cols-12 grid-cols-4 xl:p-[50px] sm:p-[30px] p-0 mb-[19px]">
        <div className=" col-span-8 justify-center m-auto flex">
          <img src={logo} alt="" className="h-[30%] w-[30%] m-auto"/>
        </div>
        <div className=" col-span-4 bg-white flex flex-col md:p-[34px] p-6  h-auto xl:w-[430px] w-auto rounded-lg md:m-0 m-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {({ errors }) => (
              <Form className="md:space-y-[30px] space-x-1" action="#">
                <div className=" grid md:grid-cols-2 ml-1 grid-cols-1 md:gap-[22px] gap-1 ">
                  <div>
                    <label
                      htmlFor="text"
                      className="text-xs font-semibold textblue "
                    >
                      First Name
                      <span style={{ color: "#E61E50" }}> (required)</span>
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      style={
                        errors.firstName
                          ? { borderBottom: "2px solid #E61E50" }
                          : {}
                      }
                      className="fieldcss capitalize"
                    ></Field>
                    <ErrorMessage
                      className="error-text"
                      name="firstName"
                      component="div"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="text-xs font-semibold textblue"
                    >
                      Last Name
                      <span style={{ color: "#E61E50" }}> (required)</span>
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      style={
                        errors.lastName
                          ? { borderBottom: "2px solid #E61E50" }
                          : {}
                      }
                      className="fieldcss capitalize"
                    ></Field>
                    <ErrorMessage
                      className="error-text"
                      name="lastName"
                      component="div"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="text-xs font-semibold textblue"
                  >
                    Work Email
                    <span style={{ color: "#E61E50" }}> (required)</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    style={
                      errors.email ? { borderBottom: "2px solid #E61E50" } : {}
                    }
                    className="fieldcss"
                  ></Field>
                  <ErrorMessage
                    className="error-text"
                    name="email"
                    component="div"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold textblue"
                  >
                    Password
                    <span style={{ color: "#E61E50" }}> (required)</span>
                  </label>
                  {!showPassword && (
                    <BiHide className="eye" onClick={() => eyeHandler()} />
                  )}
                  {showPassword && (
                    <BiShow className="eye" onClick={() => eyeHandler()} />
                  )}

                  <Field
                    type={showPassword ? "text" : "password"}
                    name="pwd"
                    id="pwd"
                    className="fieldcss"
                    placeholder=""
                    required=""
                    style={
                      errors.pwd ? { borderBottom: "2px solid #E61E50" } : {}
                    }
                  ></Field>
                  <ErrorMessage
                    className="error-text"
                    name="pwd"
                    component="div"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cpwd"
                    className="text-xs font-semibold textblue"
                  >
                    Confirm Password
                    <span style={{ color: "#E61E50" }}> (required)</span>
                  </label>
                  {!showCpassword && (
                    <BiHide
                      className="eye"
                      onClick={() => confirmEyeHandler()}
                    />
                  )}
                  {showCpassword && (
                    <BiShow
                      className="eye  "
                      onClick={() => confirmEyeHandler()}
                    />
                  )}

                  <Field
                    type={showCpassword ? "text" : "password"}
                    name="cpwd"
                    id="cpwd"
                    className="fieldcss"
                    style={
                      errors.cpwd ? { borderBottom: "2px solid #E61E50" } : {}
                    }
                  ></Field>
                  <ErrorMessage
                    className="error-text"
                    name="cpwd"
                    component="div"
                  />
                </div>

                <button type="submit" className="primeryButton w-full">
                  Create Account
                </button>

                {/* <button type="button" className="secondyButton w-full" > */}
                  <Link to={"/login"} >
                    <div className="secondyButton w-full">

                    LOGIN
                    </div>
                  </Link>
                {/* </button> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Signup;
