import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Toaster } from "react-hot-toast";

function UserLayout(props) {
  return (
    <>
    <Toaster
        containerStyle={{
          margin: "20px 0 0 - 250px",
          padding: "0 16px",
          height: "40px",
          zIndex: 9999999
        }}
        toastOptions={{
          success: {
            style: {
              background: "#149B5F",
              padding: "16px",
              color: "#fff",
              width: "500vw",
            },
          },
          error: {
            style: {
              background: "#E61E50",
              padding: "16px",
              color: "#fff",
              width: "500vw",

            },
          },
        }}
      />
      <Header />
      <main>{props.children}</main>
      <Footer />
      
    </>
  );
}

export default UserLayout;
