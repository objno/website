import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Flex from './Flex';
import Box from './Box';
import Navigation from './Navigation';
import { Link } from 'gatsby';

const Container = styled(Flex)`
  height: 2.5rem;
`;


const Header = () => (
  <Container alignItems="center" mb="2">
    <Link to="/">
      <Logo />
    </Link>
    <Box flexGrow="1" />
    <Navigation />
  </Container>
);

export default Header;
