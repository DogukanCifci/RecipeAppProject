import React from "react";

import { MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <MenuLink to="/home">HOME</MenuLink>
      <MenuLink to="/about">ABOUT</MenuLink>
      <MenuLink to="/">LOGIN</MenuLink>
    </Nav>
  );
};

export default Navbar;
