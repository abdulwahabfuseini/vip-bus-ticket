import React from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layouts;
