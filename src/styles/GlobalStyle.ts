import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: "Got", serif;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
`;
