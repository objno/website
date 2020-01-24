import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { space } from 'styled-system';

import Header from './Header';
import theme from '../theme';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 22px;
  }
  ${props => props.theme.mediaQueries.medium} {
    html {
      font-size: calc(16px - 6 * ((100vw - 320px) / 680));
    }
  }
  ${props => props.theme.mediaQueries.large} {
    html {
      font-size: 16px;
    }
  }

  body {
    font-family: 'Inria Sans', system-ui, sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.baseFontColor};
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.containerMaxWidth};
  margin: 0 auto;
  ${space}
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container p={[1, 2, 2, 3]} >
      <Header />
      {children}
      <Footer />
    </Container>
  </ThemeProvider>
);

export default Layout;
