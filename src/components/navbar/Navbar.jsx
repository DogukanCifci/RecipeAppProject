import React from "react";

import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        {"<Clarusway />"}
        <span>Recipe</span>
      </Logo>
      <Menu>
        <MenuLink to="/home">HOME</MenuLink>
        <MenuLink to="/about">ABOUT</MenuLink>
        <MenuLink to="/">LOGIN</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
