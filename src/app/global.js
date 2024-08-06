"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
 font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif; 
    color: #ff603f;
      background: linear-gradient(135deg, #270075, #6d28d9);
  }
`;

export default GlobalStyle;
