import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding: 2rem;

    @media (max-width: 768px) {
      padding: 3.4rem;
    }
  }
`;
const PicGen = () => {
  return (
    <ImageContainer>
      <Image src="/Woman.webp" alt="woman" width={500} height={500} priority />
    </ImageContainer>
  );
};

export default PicGen;
