import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff603f, #ff8a3d);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff8a3d, #ff603f);
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
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
`;

const IframeContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Message = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #ff603f;
  text-align: center;
`;

const LogoContainer = styled.div`
  width: 150px;
  margin-bottom: 2rem;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0 0 0.75rem #ff603f);
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) translateX(-50%);
    }
    50% {
      transform: translateY(-10px) translateX(-50%);
    }
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
      <LogoContainer>
        <Image
          src="/jazzerlogo2.png"
          alt="Logo"
          width={150}
          height={150}
          priority
        />
      </LogoContainer>
      <IframeContainer>
        <StyledIframe
          src="https://giphy.com/embed/gIxT0rixC0s3O5FHUw"
          allowFullScreen
        ></StyledIframe>
      </IframeContainer>
      <StyledButton onClick={handleClick} disabled={loading}>
        <span>{loading ? "Generating..." : "Generate Genre"}</span>
      </StyledButton>
      {error && <Message style={{ color: "red" }}>Error: {error}</Message>}
      {genre && <Message>Generated Genre: {genre}</Message>}
    </Container>
  );
};

export default GenerateGenre;
