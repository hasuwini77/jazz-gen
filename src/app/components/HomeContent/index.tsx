import styled from "styled-components";

const HomeContent = () => {
  const StyledTitle = styled.h3`
    padding: 1rem;
  `;

  const StyledPara = styled.p`
    padding: 0.8rem;
    line-height: 1.6rem;
  `;
  return (
    <>
      <div>
        <StyledTitle> What is Jazzer Gen?</StyledTitle>
        <StyledPara>
          Thanks to the API hosted on
          <a href="http://binaryjazz.us">binaryjazz.us</a>. We are able to
          gather data in order to create unique and creatire "Music genres" as
          well as "Stories" made of their internal catalogs of each genre
          "fragment". These catalogs are broken into instruments, beats,
          adjectives, prefixes and suffixes, regions, and genres.
        </StyledPara>
      </div>
    </>
  );
};

export default HomeContent;
