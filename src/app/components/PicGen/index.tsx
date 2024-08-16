import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const PicGen = () => {
  return (
    <ImageContainer>
      <Image src="/Woman.webp" alt="woman" width={500} height={500} />
    </ImageContainer>
  );
};

export default PicGen;
