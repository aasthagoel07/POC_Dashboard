import React from "react";
import "../../assets/css/footer.css";

function FooterComponent() {

  return (
    <>
      <footer className="  bg-gray-100 z-10 ">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full  px-4 mx-auto text-center">
            <div className="text-sm text-1 text-gray-700 font-medium py-3">
            © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
