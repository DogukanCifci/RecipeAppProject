import React from "react";

import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        {"<Dogukan />"}
        <span>Recipe</span>
      </Logo>
      <Menu>
        <MenuLink to="/about">ABOUT</MenuLink>

        <a href="https://github.com/DogukanCifci">GITHUB</a>

        <MenuLink to="/">LOGIN</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
