"use client";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";

const SplineContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SplineDonation: React.FC = () => {
  const splineRef = useRef<any>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (isReady && splineRef.current) {
      gsap.fromTo(
        splineRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, [isReady]);

  const handleLoad = () => {
    setIsReady(true);
  };

  return (
    <SplineContainer>
      <Spline
        scene="https://prod.spline.design/MHTinSg3Dv0MZjiC/scene.splinecode"
        ref={splineRef}
        onLoad={handleLoad}
      />
    </SplineContainer>
  );
};

export default SplineDonation;
