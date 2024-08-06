"use client";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #270075;
  padding: 1.2rem;
  box-sizing: border-box;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
