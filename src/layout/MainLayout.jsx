import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
