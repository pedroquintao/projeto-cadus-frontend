import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeProvider } from 'styled-components';
import { theme } from "./themes/theme";
import GlobalStyle from "./themes/globalStyle";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {

  return (
    <>
      <ModalContextProvider>
        <UserContextProvider>
          <ThemeProvider theme={theme}>
              <GlobalStyle />
              <RouterProvider router={router} />
          </ThemeProvider>
        </UserContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
