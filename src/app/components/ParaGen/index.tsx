import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: #fff;
`;

const SuperStyledTitle = styled.h1`
  font-size: 6rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fffff7, #a0a7a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  padding: 1rem;
  background: linear-gradient(135deg, #fffff7, #a0a7a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledPara2 = styled.p`
  padding: 1rem;
  font-size: 1.3rem;
  line-height: 1.5rem;
  background: linear-gradient(135deg, #fffff7, #a0a7a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ParaGen = () => {
  return (
    <StyledDiv>
      <SuperStyledTitle> Jazzer Gen</SuperStyledTitle>
      <StyledTitle>Generate New Music Genres</StyledTitle>
      <StyledPara2>In a blink of a Click</StyledPara2>
    </StyledDiv>
  );
};

export default ParaGen;
