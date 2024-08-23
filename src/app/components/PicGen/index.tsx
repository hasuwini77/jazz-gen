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
  background: transparent;
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
          rotation: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "slow(0.7, 0.7, true)",
          rotation: 372,
          onComplete: () => {
            gsap.to(spline, {
              rotation: 360,
              duration: 0.7,
              ease: "power3.in",
              onComplete: () => {
                // Add shake effect after rotation reset
                gsap.to(spline, {
                  x: "+=10", //
                  duration: 0.06,
                  repeat: 10,
                  yoyo: true,
                  ease: "power2.inOut",
                  onComplete: () => {
                    gsap.to(spline, { x: 0, duration: 0.2 });
                  },
                });
              },
            });
          },
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
