import styled from "styled-components";

const Container = styled.div`
  padding: 1.6rem;
  margin: 0 auto;
  padding-top: 2.5rem;
  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

const StyledTitle = styled.h3`
  padding: 1rem;
  margin: 0;
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const StyledPara = styled.p`
  padding: 0.8rem;
  line-height: 1.8;
  margin: 0;
  font-size: 1rem;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const HomeContent = () => {
  return (
    <Container id="about">
      <StyledTitle>What is Jazzer Gen?</StyledTitle>
      <StyledPara>
        Thanks to the API hosted on
        <a href="http://binaryjazz.us"> binaryjazz.us</a>, we are able to gather
        data in order to create unique and creative "Music genres" as well as
        "Stories" made of their internal catalogs of each genre "fragment".
        These catalogs are broken into instruments, beats, adjectives, prefixes
        and suffixes, regions, and genres.
      </StyledPara>
    </Container>
  );
};

export default HomeContent;
