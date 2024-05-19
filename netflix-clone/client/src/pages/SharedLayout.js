import React from "react";
import Header from "../components/Header/Header";
import Footer2 from "../components/Footer/Footer2";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer2 />
    </>
  );
}

export default SharedLayout;
