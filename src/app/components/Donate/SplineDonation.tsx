"use client";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const SplineContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
export default function SplineDonation() {
  return (
    <SplineContainer>
      <Spline scene="https://prod.spline.design/MHTinSg3Dv0MZjiC/scene.splinecode" />
    </SplineContainer>
  );
}
