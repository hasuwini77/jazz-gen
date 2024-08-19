"use client";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import GenerateGenre from "./components/GenerateGenre";
import Donate from "./components/Donate";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

const MainStyled = styled.main`
  background: linear-gradient(135deg, #270075, #6d28d9);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  margin-top: 4rem;

  @media (min-width: 768px) {
  }
`;

const SecondColorBg = styled.div`
  background: linear-gradient(135deg, #270075, #1d11d9);
  margin: 0;
  min-width: 100vw;
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <MainStyled>
        <Navbar />
        <GenerateGenre />
        <SecondColorBg>
          <HomeContent />
        </SecondColorBg>
        <Donate />
        <ContactForm />
      </MainStyled>
      <Footer />
    </>
  );
}
