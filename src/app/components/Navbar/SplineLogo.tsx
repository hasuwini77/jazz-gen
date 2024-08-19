"use client";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const SplineLogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
`;

const SplineLogo = () => {
  return (
    <SplineLogoContainer>
      <Spline scene="https://prod.spline.design/Ef40aukWOfMXlcin/scene.splinecode" />
    </SplineLogoContainer>
  );
};

export default SplineLogo;
