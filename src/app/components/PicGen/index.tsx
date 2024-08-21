"use client";
import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";

interface PicGenProps {
  restartKey: number;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 530px;
`;

const PicGen: React.FC<PicGenProps> = ({ restartKey }) => {
  const splineRef = useRef<any>(null);

  const restartAnimation = useCallback(() => {
    const spline = splineRef.current;

    if (spline) {
      gsap.fromTo(
        spline,
        {
          opacity: 0,
          scale: 0.5,
          rotation: 90,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          rotation: 360,
        }
      );
    }
  }, [restartKey]);

  useEffect(() => {
    restartAnimation();
  }, [restartAnimation, restartKey]);

  return (
    <ImageContainer>
      <Spline
        scene="https://prod.spline.design/Ya70LIo-lOvsXMK7/scene.splinecode"
        ref={splineRef}
      />
    </ImageContainer>
  );
};

export default PicGen;
