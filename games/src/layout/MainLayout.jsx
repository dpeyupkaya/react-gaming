import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> 
      {children}
     <Footer />
    </div>
  );
};
export default MainLayout;