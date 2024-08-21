"use client";
import styled from "styled-components";
import SplineDonation from "./SplineDonation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    max-width: 800px;
    height: 70vh;
    padding: 0;
  }
`;

const SplineContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.h3`
  padding: 1rem;
  margin: 0;
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const StyledPara = styled.p`
  padding: 0.8rem;
  line-height: 1.8;
  margin: 0;
  font-size: 1rem;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const Donate: React.FC = () => {
  return (
    <Container>
      <StyledTitle>Donate</StyledTitle>
      <StyledPara>
        At the moment, this site is simply a school project to practice the love
        for styled component and Next JS. If you feel for this project and want
        to help the team behind this idea, that created this API, you can make a{" "}
        <a href="https://binaryjazz.us/donate/"> donation here </a>. I am pretty
        sure the team at <a href="https://binaryjazz.us/">binaryjazz</a> will be
        grateful for that! If you want to contact them, you can visit{" "}
        <a href="https://binaryjazz.us/contact/" target="_blank">
          this page here{" "}
        </a>
        .
      </StyledPara>
      <SplineContainer>
        <SplineDonation />
      </SplineContainer>
    </Container>
  );
};

export default Donate;
