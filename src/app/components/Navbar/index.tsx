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
  border-bottom: 3px solid rgba(255, 255, 255, 0.3); /* Light bottom border */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center; /* Center align nav items */
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 1rem; /* Space out nav items */
`;

const StyledLink = styled(Link)`
  color: #ff603f; /* Link color */
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif; /* Font family */
  line-height: 1.4;
  padding: 0.7rem 1.5rem;
  display: block;
  border-radius: 30px; /* Rounded pill shape */
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.2); /* Light highlight */
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: transform 0.5s ease;
    z-index: 0; /* Ensure behind text */
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    background-color: #fff; /* White background on hover */
    color: #270075; /* Text color on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
    transform: translateY(-4px); /* Lift effect on hover */
  }

  span {
    position: relative;
    z-index: 1; /* Ensure text is above pseudo-element */
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
