import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ login, setLogin }) => {
  const [HamburgerCheck, setHamburgerCheck] = useState(true);
  //console.log(HamburgerCheck);

  return (
    <Nav>
      <Logo to="/home">
        {"<Dogukan />"}

        <span>Recipe</span>
      </Logo>
      <Hamburger HamburgerCheck={HamburgerCheck}>
        <GiHamburgerMenu onClick={() => setHamburgerCheck(!HamburgerCheck)} />
      </Hamburger>

      <Menu>
        <MenuLink to="/about">ABOUT</MenuLink>
        <a href="https://github.com/DogukanCifci">GITHUB</a>
        <MenuLink to="/">{login}</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
