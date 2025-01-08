import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> 
      <main>{children}</main> 
      <Footer /> 
    </div>
  );
};
export default MainLayout;