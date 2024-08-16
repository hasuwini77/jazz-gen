import React, { useState } from "react";
import styled from "styled-components";
import ParaGen from "../ParaGen";
import PicGen from "../PicGen";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const TopPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GenreResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1.7rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Message = styled.p`
  font-size: 1.6rem;
  color: #ff603f;
  text-align: center;
  font-family: "Timmana", serif;
  border: 1px solid orange;
  border-radius: 25px;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
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
        <ParaGen onButtonClick={handleClick} isLoading={loading} />
        <PicGen />
      </TopPage>
      <GenreResult>
        {error && <Message style={{ color: "red" }}>Error: {error}</Message>}
        {genre && <Message>"{genre}"</Message>}
      </GenreResult>
    </Container>
  );
};

export default GenerateGenre;
