"use client";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { FaCompactDisc } from "react-icons/fa";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #270075, #6d28d9);
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0.7rem 0.9rem;
    justify-content: center;
  }
`;

const IconContainer = styled.div`
  flex: 0 1 auto;
  transition: transform 1s ease, opacity 0.3s ease;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const NavListWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;

  &:first-child {
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:last-child {
    border: 1px solid white;
    border-radius: 25px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 1s ease;
  background: none;
  box-shadow: none;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  span {
    padding: 0.3rem;
  }
`;

const IconLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  animation: ${spin} 1.4s linear infinite;

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconContainer>
        <IconLink href="#">
          <FaCompactDisc />
        </IconLink>
      </IconContainer>
      <NavListWrapper>
        <NavList>
          <NavItem>
            <StyledLink href="#">
              <span>Home</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#about">
              <span>About</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#contact">
              <span>Contact</span>
            </StyledLink>
          </NavItem>
        </NavList>
      </NavListWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
