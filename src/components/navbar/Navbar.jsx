import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ login, setLogin }) => {
  const [hamburgerCheck, setHamburgerCheck] = useState(true);
  console.log(hamburgerCheck);

  return (
    <Nav>
      <Logo to="/home" onClick={() => setHamburgerCheck(true)}>
        {"<Dogukan />"}

        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => setHamburgerCheck(!hamburgerCheck)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu
        hamburgerCheck={hamburgerCheck}
        onClick={() => setHamburgerCheck(true)}
      >
        <MenuLink to="/about">ABOUT</MenuLink>
        <a href="https://github.com/DogukanCifci">GITHUB</a>
        <MenuLink to="/">{login}</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
