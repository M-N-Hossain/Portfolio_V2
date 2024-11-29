import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout({ isAllProjectNotShowing, children }) {
  return (
    <>
      {children}
      <Contact />
      <Footer />
    </>
  );
}
