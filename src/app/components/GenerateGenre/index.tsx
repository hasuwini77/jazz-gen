"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ParaGen from "../ParaGen";
import PicGen from "../PicGen";
import { fetchGenre } from "@/app/utils/fetching";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 2rem;
  margin-top: 3rem;

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

const GenreResultDesktop = styled.div`
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
    display: none;
  }
`;

const GenreResultMobile = styled.div`
  margin-top: 0.2rem;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
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

const GenerateGenre: React.FC = () => {
  const [genre, setGenre] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [restartKey, setRestartKey] = useState<number>(0);
  const [readyMessage, setReadyMessage] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setReadyMessage(false);

    try {
      const data = await fetchGenre();
      setGenre(data);

      setRestartKey((prevKey) => prevKey + 1);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
        setReadyMessage(true);
      }, 2700);
    }
  };

  return (
    <Container>
      <TopPage>
        <ParaGenContainer>
          <ParaGen onButtonClick={handleClick} isLoading={loading} />
        </ParaGenContainer>
        <GenreResultMobile>
          {!loading && readyMessage && (
            <>
              {error && (
                <Message style={{ color: "red" }}>Error: {error}</Message>
              )}
              {genre && <Message>"{genre}"</Message>}
            </>
          )}
        </GenreResultMobile>
        <PicGenContainer>
          <PicGen restartKey={restartKey} />
        </PicGenContainer>
      </TopPage>
      <GenreResultDesktop>
        {!loading && (
          <>
            {error && (
              <Message style={{ color: "red" }}>Error: {error}</Message>
            )}
            {genre && <Message>"{genre}"</Message>}
          </>
        )}
      </GenreResultDesktop>
    </Container>
  );
};

export default GenerateGenre;
