"use client";
import styled from "styled-components";
import GlobalStyle from "@/app/global";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import GenerateGenre from "./components/GenerateGenre";
import Donate from "./components/Donate";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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

export default function Home() {
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
    </>
  );
}
