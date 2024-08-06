"use client";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import GenerateGenre from "./components/GenerateGenre";
import styled from "styled-components";
import GlobalStyle from "@/app/global";

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
      </MainStyled>
    </>
  );
}
