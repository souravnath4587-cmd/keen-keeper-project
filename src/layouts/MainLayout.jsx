import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/pages/Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state === "loading" && (
        <span className="loading loading-spinner text-success loading-xl"></span>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
