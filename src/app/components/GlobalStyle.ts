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
    overflow-x: hidden;
  }

  body {
    font-family: 'Libre Franklin', 'Helvetica Neue', helvetica, arial, sans-serif;
    background-color: #270075;
    color: white;
  }

  #__next {
    height: 100%;
  }
`;

export default GlobalStyle;