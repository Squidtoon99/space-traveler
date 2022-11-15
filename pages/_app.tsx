import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, DefaultTheme, css } from 'styled-components';
import Box from '../components/Box';
import NavBar from "../components/layouts/NavBar";
import Starfield from '../components/Starfield';
import GlobalStyle from '../styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: "#FFF",
    background: "#000000",
    secondary: '#FFC42E',
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const { Field } = Starfield({
    stars: 250,
    state: "running",
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box>
          <NavBar />
          {Field}
          <div style={{position: "relative"}}>
            <Component {...pageProps} />
          </div>
        </Box>
        <Head>
          <title>Space Adventure</title>
        </Head>
      </ThemeProvider>
    </>
  );
}
