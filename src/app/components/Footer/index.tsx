"use client";
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  background: linear-gradient(135deg, #270072, #6d28d2);
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  p {
    margin: 0;
    font-size: 1rem;
    font-family: "Arial", sans-serif;
    background: linear-gradient(45deg, #007bff, #ff603f, #007bff);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 4s ease infinite;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright ® {year} Edwin Andermyr</p>
    </FooterContainer>
  );
};

export default Footer;
