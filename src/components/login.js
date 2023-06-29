import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import logo from "../assets/images/login_vector_2x.png";
import * as Yup from "yup";
import { BiHide, BiShow } from "react-icons/bi";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { ApiLinks } from "../assets/apis/apiLink";
import { toast } from "react-hot-toast";
import Backdrop from "@mui/material/Backdrop";
import Loader from "../components/loader";

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please provide your email"),
    password: Yup.string().required("Please provide your password"),
  });
  const eyeHandler = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (value) => {
    setOpen(!open);
    navigate("/dashboard");
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: value.email, password: value.password }),
    // };
    // fetch(`${ApiLinks}/auth/login`, requestOptions)
    //   .then((response) => response.json())
    //   .then((body) => {
    //     if (body.status === 200) {
    //       notify("Login Sucessfully");
    //       handleClose();
    //       localStorage.setItem("token", body.token);
    //       // history.push("./home");
    //     } else {
       
    //       notifyFailure(body.error);
    //       handleClose();
    //     }
    //   })
    //   .catch((err) => {
      
    //     notifyFailure(err);
    //     handleClose();
    //   });
    
  };
  const notify = (value) => toast.success(value,{
    
    success: {
        style: {
            background: '#149B5F',
            padding: '16px',
            color: '#fff',
        },
      }
});
const notifyFailure = (value) => toast.error("Failed : " + value,{
  error: {
    style: {
        background: '#E61E50',
        padding: '16px',
        color: '#fff',
    }
  }
});
  return (
    <>
      <div className="grid lg:grid-cols-12 grid-cols-4 xl:p-[50px] sm:p-[30px] p-0 mb-[19px] ">
        <div className=" col-span-8 justify-center m-auto flex">
          <img src={logo} alt="" className="h-[30%] w-[30%] m-auto"/>
        </div>
        <div className=" col-span-4 bg-white   flex flex-col md:p-[34px] p-6 h-auto xl:w-[430px] w-auto rounded-lg  ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {({ errors, values }) => (
              <Form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold  block  email-1 textblue"
                  >
                    Email <span style={{ color: "#E61E50" }}>* </span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    style={
                      errors.email ? { borderBottom: "2px solid #E61E50" } : {}
                    }
                    className="fieldcss"
                    placeholder=""
                    required=""
                    //   onKeyUp={(e) => setSendEmail(e.target.value)}
                  ></Field>
                  <ErrorMessage
                    className="p-text"
                    name="email"
                    component="div"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold .forgot email-1 textblue"
                  >
                    Password
                    <span style={{ color: "#E61E50" }}>*</span>
                  </label>
                  {!showPassword && (
                    <BiHide className="eye" onClick={() => eyeHandler()} />
                  )}
                  {showPassword && (
                    <BiShow className="eye" onClick={() => eyeHandler()} />
                  )}

                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="true"
                    className="fieldcss"
                    style={
                      errors.password
                        ? { borderBottom: "2px solid #E61E50" }
                        : {}
                    }
                  ></Field>
                  <ErrorMessage
                    className="p-text"
                    name="password"
                    component="div"
                  />
                </div>

                <div className=" w-full flex justify-end ">
                  <button
                    type="button"
                    className="forgot"
                    //   onClick={() => updateHandler()}
                  >
                    Forgot Password
                  </button>
                </div>
                <button
                  type="submit"
                  className="primeryButton w-full"
                  style={{ marginTop: "35%" }}
                >
                  Login
                </button>
                {/* <button type="button" className="secondyButton w-full"> */}
                  <Link to={"/signup"} >
                  <div className="secondyButton w-full">

                    Sign Up
                    </div>
                  </Link>
                {/* </button> */}
              </Form>
            )}
          </Formik>
        </div>
      <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <Loader />
          </Backdrop>
      </div>
    </>
  );
}

export default Login;
