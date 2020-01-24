import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { typography, flexbox, layout } from 'styled-system';
import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import Button from '../../../components/Button';
import ArrowLeft from '../../../components/icons/ArrowLeft';
import Link from '../../../components/Link';

const Heading = styled.h1`
  ${typography}
`;

const Text = styled(Box)``;

const Img = styled(Image)`
  max-height: 485px;
  ${flexbox}
  ${layout}
`;

const Slide = ({ title, description, mainImage, url }) => {
  return (
    <Flex flexDirection={['column', 'row', 'row']}>
      <Box width={[0, 5 / 12, 7 / 12, 8 / 12]} display={['none', 'none', 'block']}>
        {mainImage &&
          mainImage.asset &&
          mainImage.asset.localFile &&
          mainImage.asset.localFile.childImageSharp &&
          mainImage.asset.localFile.childImageSharp.fluid && (
            <Img
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
              height="30rem"
              fluid={mainImage.asset.localFile.childImageSharp.fluid}
            />
          )}
      </Box>
      <Flex width={[1, 1, 5 / 12, 4 / 12]} ml={[0, 0, 2]} alignItems="center">
        <Box m={[1, 1, 0]}>
          <Heading fontSize="5">{title}</Heading>
          <Text fontSize="2">{description}</Text>
          {url && (
            <Link mt="2" to={url}>
              Les mer <ArrowLeft ml="1" width="1.375rem" />
            </Link>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Slide;
