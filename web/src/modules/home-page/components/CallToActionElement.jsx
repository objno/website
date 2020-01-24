import React from 'react';
import styled from 'styled-components';
import Box from '../../../components/Box';
import { Link } from 'gatsby';
import ArrowLeft from '../../../components/icons/ArrowLeft';

const Heading = styled.h2`
  padding: 0px;
  margin: 0px;
  margin-bottom: 1rem;
`
const Text = styled(Box)``;

const Element = styled(Box)`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  display: block;
`;

const CallToActionElement = ({ title, description, url, ...props }) => {
  return (
    <Element as={Link} to={url} border="1px solid" p="2" borderColor="primary" {...props}>
      <Heading fontSize="5">{title} <ArrowLeft ml="1" height="0.8rem" /></Heading>
      <Text>{description}</Text>
    </Element>
  );
}

export default CallToActionElement
