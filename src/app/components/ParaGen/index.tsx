import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1rem;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  padding: 1rem;
`;

const StyledPara2 = styled.p`
  padding: 1rem;
  line-height: 1rem;
`;
const ParaGen = () => {
  return (
    <>
      <StyledDiv>
        <StyledTitle>Generate New Music Genres </StyledTitle>
        <StyledPara2>In a blink of a Click</StyledPara2>
      </StyledDiv>
    </>
  );
};

export default ParaGen;
