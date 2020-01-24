import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale';
import { typography, flexbox, layout, color } from 'styled-system';
import { Link as GatsbyLink } from 'gatsby';

import Box from '../../../components/Box';
import BlockContent from '../../../components/BlockContent';

const Details = styled(Box)`
  font-style: italic;
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;
`;

const Header = styled.h2`
  text-decoration: none;
  ${color}
`

const Img = styled(Image)`
  max-width: 400px;
  max-height: 230px;
  ${flexbox}
  ${layout}
`;

const Article = ({ slug, title, publishedAt, _rawExcerpt, mainImage, ...props }) => {
  return (
    <Box as="article">
      <Link to={`/post/${slug.current}`}>
        {mainImage &&
          mainImage.asset &&
          mainImage.asset.localFile &&
          mainImage.asset.localFile.childImageSharp &&
          mainImage.asset.localFile.childImageSharp.fluid && (
            <Img
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
              fluid={mainImage.asset.localFile.childImageSharp.fluid}
            />
          )}
        <Header>{title}</Header>
      </Link>
      <Details fontSize="0">
        {format(new Date(publishedAt), 'PPP', {
          locale: nb
        })}
      </Details>
      {_rawExcerpt && <BlockContent blocks={_rawExcerpt || []} />}
    </Box>
  );
};

export default Article;
