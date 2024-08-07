import styled from "styled-components";

const StyledTitle = styled.h3`
  padding: 1rem;
  margin: 0;
`;

const StyledPara = styled.p`
  padding: 0.8rem;
  line-height: 1.6;
  margin: 0;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HomeContent = () => {
  return (
    <div id="about">
      <StyledTitle>What is Jazzer Gen?</StyledTitle>
      <StyledPara>
        Thanks to the API hosted on
        <a href="http://binaryjazz.us">binaryjazz.us</a>. We are able to gather
        data in order to create unique and creative "Music genres" as well as
        "Stories" made of their internal catalogs of each genre "fragment".
        These catalogs are broken into instruments, beats, adjectives, prefixes
        and suffixes, regions, and genres.
      </StyledPara>
    </div>
  );
};

export default HomeContent;
