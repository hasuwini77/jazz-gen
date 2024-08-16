import React, { useState } from "react";
import styled from "styled-components";
import { Timmana } from "next/font/google";
import ParaGen from "../ParaGen";
import PicGen from "../PicGen";

const timmana = Timmana({
  subsets: ["latin"],
  weight: ["400"],
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  padding: 1rem 3rem;
  font-size: 1rem;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  color: #fff;
  background: linear-gradient(135deg, #ff603f, #ff8a3d);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 0 15px rgba(255, 96, 63, 0.7);

  &:hover {
    background: linear-gradient(135deg, #ff8a3d, #ff603f);
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

const TopPage = styled.div`
  display: flex;
`;

const GenreResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 1.7rem;
  padding-top: 1rem;
`;

const Message = styled.p`
  font-size: 1.6rem;
  color: #ff603f;
  text-align: center;
  font-family: "Timmana", serif;
  border: 1px solid orange;
  border-radius: 25px;
  padding: 1rem;
`;

const GenerateGenre = () => {
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://binaryjazz.us/wp-json/genrenator/v1/genre/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setGenre(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopPage>
        <ParaGen />
        <PicGen />
      </TopPage>
      <GenreResult>
        <StyledButton onClick={handleClick} disabled={loading}>
          <span>{loading ? "Generating..." : "Generate Genre"}</span>
        </StyledButton>
        {error && <Message style={{ color: "red" }}>Error: {error}</Message>}
        {genre && <Message>"{genre}"</Message>}
      </GenreResult>
    </Container>
  );
};

export default GenerateGenre;
