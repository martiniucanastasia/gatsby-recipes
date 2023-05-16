import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
