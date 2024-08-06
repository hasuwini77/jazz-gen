import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
    transform: scale(1.05); /* Slightly enlarge */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
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
    background: rgba(255, 255, 255, 0.1); /* Subtle highlight */
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: transform 0.5s ease;
    z-index: 0; /* Behind button content */
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  /* Button text */
  span {
    position: relative;
    z-index: 1; /* Above pseudo-element */
  }
`;

const GenerateGenre = () => {
  return (
    <Container>
      <StyledButton>
        <span>Generate Genre</span>
      </StyledButton>
    </Container>
  );
};

export default GenerateGenre;
