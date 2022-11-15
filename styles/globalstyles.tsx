import { createGlobalStyle } from 'styled-components';
import { Ropa_Sans } from "@next/font/google";

const font = Ropa_Sans({weight: "400"});

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: Ropa Sans;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${font}) format('woff2');
  } */

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    /* font-size: 10px; */
    font-family: ${font.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
