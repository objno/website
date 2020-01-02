import React from 'react';
import styled from 'styled-components';
import Box from '../../../components/Box';
import Button from '../../../components/Button';
import ArrowLeft from '../../../components/icons/ArrowLeft';
import Grid from '../../../components/Grid';
import Flex from '../../../components/Flex';

const ContactBox = ({ title, description, link }) => (
  <Grid
    border="0.5rem solid"
    borderColor="white"
    p="3"
    gridTemplateColumns={['', '', '2fr 1fr']}
    gridGap={60}
  >
    <Box fontSize="2">
      <Box as="h3" mt="0" fontSize="5">
        {title}
      </Box>
      {description}
    </Box>
    <Flex alignItems="center">
      <Button as="a" href={link}>
        Book et møte <ArrowLeft height="10" />
      </Button>
    </Flex>
  </Grid>
);

export default ContactBox;
