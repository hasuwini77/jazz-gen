"use client";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #270075, #6d28d9);
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 1rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  line-height: 1.3;
  padding: 0.7rem 1.5rem;
  display: block;
  border-radius: 30px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #ff603f, #ff8a3d);
  /* Glow effect */
  box-shadow: 0 0 15px rgba(255, 96, 63, 0.7);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: transform 0.5s ease;
    z-index: 0;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    background: linear-gradient(135deg, #ff8a3d, #ff603f);
    color: #fff;
    box-shadow: 0 0 25px rgba(255, 96, 63, 0.9);
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
          <StyledLink href="#about">About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href="/contact">Contact</StyledLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
