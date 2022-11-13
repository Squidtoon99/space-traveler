import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme, css } from 'styled-components';
import Box from '../components/Box';
import NavBar from "../components/layouts/NavBar";
import GlobalStyle from '../styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: "#FFF",
    background: "#000000",
    secondary: '#FFC42E',
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box>
          <NavBar />
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
}
