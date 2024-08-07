"use client";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Donate from "./components/Donate";
import GenerateGenre from "./components/GenerateGenre";
import Footer from "./components/Footer";
import styled from "styled-components";
import GlobalStyle from "@/app/global";

const MainStyled = styled.main`
  margin: 0;
  box-sizing: border-box;
`;

const StylishHr = styled.hr`
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

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <MainStyled>
        <Navbar />
        <GenerateGenre />
        <HomeContent />
        <StylishHr />
        <Donate />
      </MainStyled>
      <Footer />
    </>
  );
}
