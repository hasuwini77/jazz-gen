import React, { useState } from "react";
import styled from "styled-components";
import ParaGen from "../ParaGen";
import PicGen from "../PicGen";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TopPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ParaGenContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const PicGenContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const GenreResult = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1.7rem;
  width: 100%;

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
        <ParaGenContainer>
          <ParaGen onButtonClick={handleClick} isLoading={loading} />
        </ParaGenContainer>
        <PicGenContainer>
          <PicGen />
        </PicGenContainer>
      </TopPage>
      <GenreResult>
        {error && <Message style={{ color: "red" }}>Error: {error}</Message>}
        {genre && <Message>"{genre}"</Message>}
      </GenreResult>
    </Container>
  );
};

export default GenerateGenre;
