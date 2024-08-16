"use client";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import GenerateGenre from "./components/GenerateGenre";
import Donate from "./components/Donate";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import GlobalStyle from "./components/GlobalStyle";

interface BackToTopButtonProps {
  show: boolean;
}

const MainStyled = styled.main`
  background: linear-gradient(135deg, #270075, #6d28d9);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const BackToTopButton = styled.button<BackToTopButtonProps>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff603f;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem;
    padding: 0.75rem 1.25rem;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #ff8a3d;
  }
`;

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyle />
      <MainStyled>
        <Navbar />
        <GenerateGenre />
        <HomeContent />
        <Donate />
        <ContactForm />
      </MainStyled>
      <Footer />
      <BackToTopButton show={showButton} onClick={scrollToTop}>
        ↑
      </BackToTopButton>
    </>
  );
}
