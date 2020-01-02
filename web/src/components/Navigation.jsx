import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Link as GatsbyLink } from 'gatsby';

const Container = styled.div`
`;

const Link = styled(GatsbyLink)`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  ${space}
`;

const Navigation = () => (
  <Container>
    <Link mr="2" to="/about">Om Objekt Venture AS</Link>
    {/* <Link to="/about">Virkemidler</Link> */}
    <Link to="/contact">Kontakt oss</Link>
  </Container>
);

export default Navigation;
