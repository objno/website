import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { space } from 'styled-system';

import Header from './Header';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;
  }
  body {
    font-family: 'Inria Sans', system-ui, sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.baseFontColor};
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.containerMaxWidth}
  margin: 0 auto;
  ${space}
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container p={[1 / 2, 1, 1, 2]} >
      <Header />
      {children}
    </Container>
  </ThemeProvider>
);

export default Layout;
