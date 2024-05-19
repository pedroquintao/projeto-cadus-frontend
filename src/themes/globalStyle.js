import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #00E1B9 1%, #26a8db 19%, white 90%);
    background: linear-gradient(to bottom, #1B2B5C 1%, #26a8db 19%, white 90%);
    color: ${({ theme }) => theme.colors.darkBlue};
    font-family: "source-sans-pro", sans-serif;
    font-size: 1.5em;
  }`;

export default GlobalStyle;