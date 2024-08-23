"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import SplitType from "split-type";
import { PacmanLoader } from "react-spinners";

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
  -webkit-text-fill-color: white;
  font-family: "Timmana", serif;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-kerning: none;

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
  position: relative;
  padding: 1.2rem;
  width: 23vw;
  height: 8vh;
  font-size: 1.2rem;
  margin-top: 1rem;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  color: #fff;
  background: linear-gradient(135deg, #ff99aa, #ff1899);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff7799, #cc0077);
    box-shadow: 0 0 25px rgba(255, 96, 63, 0.9);
  }

  &:focus {
    outline: none;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:disabled {
    background: linear-gradient(135deg, #ff99aa, #ff1899);
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    width: 60vw;
    height: 9vh;
    font-size: 1.1rem;
  }

  @media (max-width: 1180px) {
    width: 45vw;
    height: 8vh;
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 50px;

  .pacman-loader {
    margin: 0 auto;
  }
`;

const ParaGen: React.FC<ParaGenProps> = ({ onButtonClick, isLoading }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const split = new SplitType(".super-title", { types: "chars" });
    gsap.from(split.chars, {
      opacity: 0,
      y: 100,
      stagger: 0.06,
      duration: 3,
      ease: "elastic.out",
    });

    if (buttonRef.current && loaderRef.current) {
      if (isLoading) {
        gsap.to(buttonRef.current, {
          scale: 1,
          borderRadius: "50px",
          duration: 0.5,
          ease: "ease.inOut",
        });
        gsap.to(loaderRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "ease.inOut",
        });
      } else {
        gsap.to(buttonRef.current, {
          scale: 1,
          borderRadius: "50px",
          duration: 0.5,
          ease: "ease.inOut",
        });
        gsap.to(loaderRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0.5,
          ease: "ease.inOut",
        });
      }
    }
  }, [isLoading]);

  return (
    <StyledDiv>
      <SuperTitle className="super-title">Jazzer Gen</SuperTitle>
      <StyledTitle>Generate New Music Genres</StyledTitle>
      <StyledPara2>In a blink of a Click</StyledPara2>
      <StyledButton
        onClick={onButtonClick}
        disabled={isLoading}
        ref={buttonRef}
      >
        {isLoading && (
          <LoaderContainer ref={loaderRef}>
            <PacmanLoader size={15} color={"#ff99aa"} loading={isLoading} />
          </LoaderContainer>
        )}
        {!isLoading && <span>Generate Genre</span>}
      </StyledButton>
    </StyledDiv>
  );
};

export default ParaGen;
