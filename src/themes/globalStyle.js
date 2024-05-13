import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background: ${({ theme }) => theme.colors.darkBlue}; */
    background: linear-gradient(to bottom, #00E1B9 1%, #26a8db 29%, white 80%);
    /* background: linear-gradient(to bottom, #1B2B5C 1%, #26a8db 29%, white 80%); */
    color: ${({ theme }) => theme.colors.darkBlue};
    font-family: "source-sans-pro", sans-serif;
    font-size: 1.5em;
  }`;

export default GlobalStyle;