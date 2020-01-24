import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import BlockContent from '../../components/BlockContent';
import Box from '../../components/Box';

const Details = styled(Box)`
  font-style: italic;
`;

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      _rawExcerpt
    }
  }
`;

const Article = ({ data }) => {
  const {
    post: { title, _rawBody, _rawExcerpt, publishedAt }
  } = data;
  return (
    <Layout>
      <h1>{title}</h1>
      <Box pb="2" fontSize="4" width={1 / 2}>
        <BlockContent blocks={_rawExcerpt || []} />
        <Details>
          {format(new Date(publishedAt), 'PPP', {
            locale: nb
          })}
        </Details>
      </Box>
      <BlockContent blocks={_rawBody || []} />
    </Layout>
  );
};

export default Article;
