"use client";
import styled from "styled-components";
import GlobalStyle from "@/app/global";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import GenerateGenre from "./components/GenerateGenre";
import Donate from "./components/Donate";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

interface BackToTopButtonProps {
  show: boolean;
}

const VisibleHr = styled.hr`
  border: none;
  background: linear-gradient(to right, #270075, #6d28d9);
  position: relative;
  overflow: visible;

  &::after {
    content: "";
    display: block;
    width: 70%;
    height: 6px;
    background: linear-gradient(to right, #270075, #6d28d9);
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
`;

const MobileOnlyHr = styled.hr`
  border: none;
  background: linear-gradient(to right, #270075, #6d28d9);
  position: relative;
  overflow: visible;

  &::after {
    content: "";
    display: block;
    width: 70%;
    height: 6px;
    background: linear-gradient(to right, #270075, #6d28d9);
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }

  @media (min-width: 1024px) {
    display: none; /* Hide on desktop */
  }
`;

const MainStyled = styled.main`
  margin: 0;
  box-sizing: border-box;
`;

const BackToTopButton = styled.button<BackToTopButtonProps>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.75rem 1.25rem;
  background-color: #ff603f;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

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
        <VisibleHr />
        <Donate />
        <MobileOnlyHr />
        <ContactForm />
      </MainStyled>
      <Footer />
      <BackToTopButton show={showButton} onClick={scrollToTop}>
        ↑ Back to Top
      </BackToTopButton>
    </>
  );
}
