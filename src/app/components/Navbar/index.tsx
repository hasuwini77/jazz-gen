"use client";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: linear-gradient(
    135deg,
    #270075,
    #6d28d9
  ); /* Gradient background */
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center; /* Center-align items */
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 1rem; /* Space out nav items */
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 0.7rem 1.5rem;
  display: block;
  border-radius: 30px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: transform 0.5s ease;
    z-index: 0;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    background-color: #fff;
    color: #270075;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px);
  }
  span {
    position: relative;
    z-index: 1;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <StyledLink href="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href="/about">About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href="/contact">Contact</StyledLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
