import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
  
  export default Theme;