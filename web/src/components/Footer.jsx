import React from 'react';
import styled from 'styled-components';
import { typography } from 'styled-system';
import { useStaticQuery } from 'gatsby';
import Box from './Box';
import Grid from './Grid';

const Title = styled.h2`
  font-weight: normal;
  ${typography}
`

const Text = styled(Box)`
  white-space: pre-line;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        description
        keywords
        publicEmail
        vatId
        address
      }
    }
  `);
  const { site } = data;

  if (!site) return <Box>En feil oppsto</Box>;

  const { title, address, vatId, publicEmail } = site;

  return (
    <Box mt="4">
      <Title fontSize="5">{title}</Title>
      <Grid gridTemplateColumns={['', '', '1fr 1fr']} gridGap={30} width={6 / 12}>
        <Box>
          <Text>{address}</Text>
          <Box mt="2">Organisasjonsnummer: {vatId}</Box>
          <Box mt="1">E-post: {publicEmail}</Box>
        </Box>
        {/* <Box>Om oss</Box> */}
      </Grid>
    </Box>
  );
};

export default Footer;
