import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ food, setFood }) => {
  const [HamburgerCheck, setHamburgerCheck] = useState(true);
  console.log(HamburgerCheck);
  return (
    <Nav>
      <Logo to="/home" onClick={() => setFood("")}>
        {"<Dogukan />"}

        <span>Recipe</span>
      </Logo>
      <Hamburger HamburgerCheck={HamburgerCheck}>
        <GiHamburgerMenu onClick={() => setHamburgerCheck(!HamburgerCheck)} />
      </Hamburger>

      <Menu>
        <MenuLink to="/about">ABOUT</MenuLink>
        <a href="https://github.com/DogukanCifci">GITHUB</a>
        <MenuLink to="/">LOGIN</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
