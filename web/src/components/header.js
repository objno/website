import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Flex from './Flex';
import Box from './Box';
import MainNavigation from './MainNavigation';

const Container = styled(Flex)`
  height: 2.5rem;
`;


const Header = () => (
  <Container alignItems="center">
    <Logo />
    <Box flexGrow='1' />
    <MainNavigation />
  </Container>
);

export default Header;
