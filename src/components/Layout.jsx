import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout({ children, isHomepage = true }) {
  return (
    <>
      {children}
      <Contact isHomepage={isHomepage} />
      <Footer />
    </>
  );
}
