import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
