import React from "react";
import styled from "styled-components";

interface ParaGenProps {
  onButtonClick: () => void;
  isLoading: boolean;
}

const StyledDiv = styled.div`
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  margin: 0;
`;

const SuperTitle = styled.h1`
  font-size: 5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff, #b0b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Timmana", serif;
  line-height: 1.2;
  letter-spacing: 0.04em;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 1rem;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffffff, #dcdcdc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
`;

const StyledPara2 = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
  line-height: 1.4rem;
  background: linear-gradient(135deg, #ffffff, #dcdcdc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.3rem;
  }
`;
const StyledButton = styled.button`
  padding: 1rem 3rem;
  font-size: 1rem;
  margin-top: 1rem;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  color: #fff;
  background: linear-gradient(135deg, #ff99aa, #ff1899);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 96, 63, 0.7);

  &:hover {
    background: linear-gradient(135deg, #ff7799, #cc0077);
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(255, 96, 63, 0.9);
  }

  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: transform 0.5s ease;
    z-index: 0;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:disabled {
    background: #b3b3b3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1.4rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 3rem;
    font-size: 1.3rem;
  }
`;

const ParaGen: React.FC<ParaGenProps> = ({ onButtonClick, isLoading }) => {
  return (
    <StyledDiv>
      <SuperTitle> Jazzer Gen</SuperTitle>
      <StyledTitle>Generate New Music Genres</StyledTitle>
      <StyledPara2>In a blink of a Click</StyledPara2>
      <StyledButton onClick={onButtonClick} disabled={isLoading}>
        <span>{isLoading ? "Generating..." : "Generate Genre"}</span>
      </StyledButton>
    </StyledDiv>
  );
};

export default ParaGen;
